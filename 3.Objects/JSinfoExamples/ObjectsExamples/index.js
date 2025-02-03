let user = {
    name:"John",
    age:30,
}

let clone = {}

for(let key in user){
    clone[key] = user[key];
}

let userr = {name:"John"}

let permission1 = {canView:true};
let permission2 = {canEdit:true};

Object.assign(userr,permission1,permission2);

let clonee = Object.assign({},user)

// structuredClone

let user2 = {
    name:"John",
    sizes:{
        height : 182,
        width:50
    }
}

let clone2 = structuredClone(user2)