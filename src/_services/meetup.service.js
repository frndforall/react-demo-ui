
// import { authHeader } from '../_helpers';

export const meetupService = {
    getAllMeetups,
    getMeetupDetails
};

function getAllMeetups(){
    const requestOptions = {
        method: 'get',
    };
    return fetch('http://localhost:3001/api/v1/meetups', requestOptions)
    .then(handleResponse)
    .then(meetups => {
        console.log(meetups);
        return meetups;
    });
}

function getMeetupDetails(id){
    debugger;
    const requestOptions = {
        method: 'get',
    };
    return fetch('http://localhost:3001/api/v1/meetups/'+id, requestOptions)
    .then(handleResponse)
    .then(meetup => {
        return meetup;
    });
} 

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function handleResponse(response) {
    console.log(response);
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
            }
            const error = (data && data.message) || response.statusText || 'Error is processing the request';
            return Promise.reject(error);
        }
        return data;
    });
}