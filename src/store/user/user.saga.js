import { takeLatest, put, all, call } from "redux-saga/effects";
import { USER_ACTION_TYPES } from "./user.types";
import { signInSuccess, signInFailed, googleSignInStart } from "./user.action";
import { getCurrentUser, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";


export function* getSnpashotFromUserAuth (userAuth, additionalDetails){
    try{
        const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalDetails)
        console.log(userSnapshot)
        console.log(userSnapshot.data)
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
    }catch(error){
        yield put (signInFailed(error))
    }
}

export function* isUserAuth(){
    try{
        const userAuth=yield call(getCurrentUser)
        if(!userAuth)return //if theres no user then return

        yield call(getSnpashotFromUserAuth, userAuth)
    }catch(error){
        yield put (signInFailed(error))
    }
}

export function* onCheckUserSession(){
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuth )
}

export function* userSagas(){
    yield all([call(onCheckUserSession)])
}