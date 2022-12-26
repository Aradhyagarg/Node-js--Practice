console.log('BEFORE');
getUser(1, (user)=>{
    getRepositories(user.gitHubUsername, (repos)=>{
        console.log('Repos', repos);
    });
});
function getUser(id, callback){
setTimeout(()=>{
    console.log('READING');
    callback({id:id, gitHubUsername:'aradhya'});
}, 5000);
}
function getRepositories(username, callback){
    setTimeout(() => {
        console.log('LIST');
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}