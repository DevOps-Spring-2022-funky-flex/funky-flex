import {login} from '../utils/login.js';

it ('should get login token', async ()=>{
    const loginRequest = {
        userName:"funky@yahoo.com",
        password: '123456',
    }
    await login(loginRequest);
})