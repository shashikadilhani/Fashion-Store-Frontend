import { API_BASE_URL, POLL_LIST_SIZE, ACCESS_TOKEN } from '../constants';

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })
    
    if(localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
    .then(response => 
        response.json().then(json => {
            if(!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );
};


export function login(loginRequest) {

    // return request({
    //     url: API_BASE_URL + "/item/view/serial?serial_no=1",
    //     method: 'POST',
    //     body: JSON.stringify(loginRequest)
        
    // });

    const results = fetch({
        url: API_BASE_URL + "http://localhost:8080/auth/login",
        method: 'POST',
        body: JSON.stringify(loginRequest),
        
        
    }).then(result => console.log('success====:', result))
    .catch(error => console.log('error============:', error));

    return results;
}

export function signup(signupRequest) {
    return request({
        url: API_BASE_URL + "/auth/signup",
        method: 'POST',
        body: JSON.stringify(signupRequest)
    });
}

export function checkUsernameAvailability(username) {
    return request({
        url: API_BASE_URL + "/user/checkUsernameAvailability?username=" + username,
        method: 'GET'
    });
}

export function checkEmailAvailability(email) {
    return request({
        url: API_BASE_URL + "/user/checkEmailAvailability?email=" + email,
        method: 'GET'
    });
}


export function getCurrentUser() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/user/me",
        method: 'GET'
    });
}

export function getUserProfile(username) {
    return request({
        url: API_BASE_URL + "/users/" + username,
        method: 'GET'
    });
}

// export function getUserCreatedPolls(username, page, size) {
//     page = page || 0;
//     size = size || POLL_LIST_SIZE;

//     return request({
//         url: API_BASE_URL + "/users/" + username + "/polls?page=" + page + "&size=" + size,
//         method: 'GET'
//     });
// }

// export function getUserVotedPolls(username, page, size) {
//     page = page || 0;
//     size = size || POLL_LIST_SIZE;

//     return request({
//         url: API_BASE_URL + "/users/" + username + "/votes?page=" + page + "&size=" + size,
//         method: 'GET'
//     });
// }