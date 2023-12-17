import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './services/Auth/loginSlice';
import tokenReducer from './services/Auth/tokenSlice';
import registerReducer from './services/Auth/signUpSlice';
import logoutReducer from './services/Auth/logoutSlice';
import getUsersReducer from './services/Auth/getUsersSlice';
import getGroupsReducer from './services/Group/getGroupSlice';
import addGroupsReducer from './services/Group/addGroupSlice';
import deleteGroupReducer from './services/Group/deleteGroupSlice';
import addUserInGroupReducer from './services/Group/addUserInGroup';
import leaveUserFromGroupReducer from './services/Group/leaveUserFromGroup';
import getGroupsAboutTypeReducer from './services/Group/getGroupsAboutTypeSlice';
import getAllFilesReducer from './services/File/getAllFilesSlice';
import createFilesReducer from './services/File/createFileSlice';
import deleteFileReducer from './services/File/deleteFileSlice';
import downloadFileReducer from './services/File/downloadFileSlice';

const store = configureStore({
    reducer: {
        token: tokenReducer,
        login: loginReducer,
        register: registerReducer,
        logout: logoutReducer,
        getUsers: getUsersReducer,
        getGroups: getGroupsReducer,
        addGroups: addGroupsReducer,
        deleteGroup: deleteGroupReducer,
        addUserInGroup: addUserInGroupReducer,
        leaveUserFromGroup: leaveUserFromGroupReducer,
        getAllFiles: getAllFilesReducer,
        createFiles: createFilesReducer,
        deleteFile: deleteFileReducer,
        downloadFile: downloadFileReducer,
        getGroupsAboutType: getGroupsAboutTypeReducer
    }
});

export default store;