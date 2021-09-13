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


// export function login(loginRequest) {

//     // return request({
//     //     url: API_BASE_URL + "/auth/login ",
//     //     method: 'POST',
//     //     body: JSON.stringify(loginRequest)
      
        
//     // });

//     const results = fetch({
//         url:  "http://localhost:8080/auth/login",
//         method: 'POST',
//         body: JSON.stringify(loginRequest),
        
        
//     }).then(result => console.log('success====:', result))
//     .catch(error => console.log('error============:', error));

//     return results;

   
// }

export function login(loginRequest) {
    return request({
        url: "http://localhost:8080/auth/login",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}

export function signup(signupRequest) {
    return request({
        url: "http://localhost:8080/auth/register",
        method: 'POST',
        body: JSON.stringify(signupRequest)
    });
}

export function checkUsernameAvailability(username) {
    return request({
        url: "http://localhost:8080/customer/user?username=" + username,
        method: 'GET'
    });
}

export function checkEmailAvailability(email) {
    return request({
        url: "http://localhost:8080/customer/user?email=" + email,
        method: 'GET'
    });
}


export function getCurrentUser() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: "http://localhost:8080/customer/user/me",
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