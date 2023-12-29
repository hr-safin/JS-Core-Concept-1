// props are used to store data
// methods are used to perform  action or operation on the object

const bioData = {
    name : "Hasibur raman safin",  // key value pairs
    age : " 21",
    dream : "study abroad",  // props or properties
    skill : function (params1, params2, params3){   // methods
        console.log(params1, params2, params3,"web development")
    }
}

console.log(bioData.name)

bioData.skill("Html","Css", "JS")