const aliases = {
    name: "name:name|text",
    fname: "name:fname|text",
    lname: "name:lname|text",
    username: "name:username|text",
    email: "name:email|email",
    email_confirmation: "name:email_confirmation|email",
    password: "name:password|password",
    password_confirmation: "name:password_confirmation|password",
    age: "name:age|number",
    birthday: "name:birthday|date",
    photo: "name:photo|file|accept:image/*",
    picture: "name:picture|file|accept:image/*",
    profile_picture: "name:profile_picture|file|accept:image/*",
}

function setAliases(aliases) {
    sessionStorage.setItem('FormBuilderConfig', JSON.stringify({aliases}))
}

function registerAliases(aliases) {
	const currentAliases = getAliases();
    setAliases({...currentAliases, ...aliases});
}

function getAliases() {
    let config = sessionStorage.getItem('FormBuilderConfig');

    if (typeof config === "string") {
        config = JSON.parse(config);

        if (typeof config.aliases === "object") {
            return config.aliases;
		}
    }

    return aliases;
}

const FieldAliases = {
    aliases,
    setAliases,
    registerAliases,
    getAliases,
};

export default FieldAliases;
