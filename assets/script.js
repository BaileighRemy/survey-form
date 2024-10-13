const submissionInfo = document.getElementById('submission');
const nameInput = document.getElementById('name');
const genderInput = document.getElementById('gender');
const ageInput = document.getElementById('age');

const profiles = JSON.parse(localStorage.getItem("profiles")) || [];

const addProfile = (name, gender, age) => {
    profiles.push({
        name, 
        gender, 
        age
    });

    localStorage.setItem("profiles", JSON.stringify(profiles));
    console.log(localStorage.getItem("profiles"));

    return { name, gender, age };
};

const createProfileElement = ({name, gender, age}) => {
    const profileDiv = document.createElement('div');
    const profileName = document.createElement('h2');
    const profileGender = document.createElement('p');
    const profileAge = document.createElement('p');

    profileName.innerText = "Profile name: " + name
    profileGender.innerText = "Profile gender: " + gender;
    profileAge.innerText = "Profile age: " + age;

    profileDiv.appendChild(profileName);
    profileDiv.appendChild(profileGender);
    profileDiv.appendChild(profileAge);

    const profileContainer = document.getElementById('profileContainer'); // Ensure you have a container in your HTML
    profileContainer.appendChild(profileDiv);

};

profiles.forEach(createProfileElement);

submissionInfo.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Button clicked");

const newProfile = addProfile(
    nameInput.value,
    genderInput.value,
    ageInput.value,
);

createProfileElement(newProfile);

nameInput.value = "";
genderInput.value = "";
ageInput.value = "";


});