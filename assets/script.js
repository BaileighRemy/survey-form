const submissionInfo = document.getElementById('submission');
const nameInput = document.getElementById('name');
const genderInput = document.getElementById('gender');
const ageInput = document.getElementById('age');
const likeToCode = document.getElementById('likeToCode');
let preference;
let experience;


const getpreference = () => {
    const preferenceOptions = document.getElementsByName('preference');
    const selectedPreferences = []; //creates array to hold selected preferences


    for (const option of preferenceOptions) {
        if (option.checked) {
            selectedPreferences.push(option.value);
        }
    }
    return selectedPreferences;
};


preference = getpreference();




const getExperience = () => {
    const experienceOptions = document.getElementsByName('experience');
    for (const option of experienceOptions) {
        if (option.checked) {


            return option.value;
        }
    }
    return null;
};


experience = getExperience();




const profiles = JSON.parse(localStorage.getItem("profiles")) || [];


const addProfile = (name, gender, age, likeToCode, experience, preference) => {
    profiles.push({
        name,
        gender,
        age,
        likeToCode,
        experience,
        preference
    });


    localStorage.setItem("profiles", JSON.stringify(profiles));
    console.log(localStorage.getItem("profiles"));


    return { name, gender, age, likeToCode, experience, preference };
};



function createProfileElement(profile) {
    // Create a new element for the profile
    const profileElement = document.createElement('div');
    profileElement.classList.add('profile');


    // Create child elements for the profile data
    const nameElement = document.createElement('p');
    nameElement.textContent = `Name: ${profile.name}`;


    const genderElement = document.createElement('p');
    genderElement.textContent = `Gender: ${profile.gender}`;


    const ageElement = document.createElement('p');
    ageElement.textContent = `Age: ${profile.age}`;


    const likeToCodeElement = document.createElement('p');
    likeToCodeElement.textContent = `Like to Code: ${profile.likeToCode}`;


    const experienceElement = document.createElement('p');
    experienceElement.textContent = `Experience: ${profile.experience}`;


    const preferenceElement = document.createElement('p');
    preferenceElement.textContent = `Preference: ${profile.preference}`;


    // Append child elements to the profile element
    profileElement.appendChild(nameElement);
    profileElement.appendChild(genderElement);
    profileElement.appendChild(ageElement);
    profileElement.appendChild(likeToCodeElement);
    profileElement.appendChild(experienceElement);
    profileElement.appendChild(preferenceElement);


    // Make sure to append the profileElement to a valid parent element
    const profilesContainer = document.getElementById('profilesContainer'); // Ensure this is the correct parent
    profilesContainer.appendChild(profileElement);
}


profiles.forEach(profile => {
    createProfileElement(profile);
});


const textArea = document.getElementById("suggestions"); 
function saveToLocalStorage() {
const textValue = textArea.value;
localStorage.setItem("suggestions", textValue);
}

function retrieveFromLocalStorage() {
    const storedValue = localStorage.getItem("suggestions");

    if (storedValue) {
        textArea.value = storedValue;
    }
};

submissionInfo.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Button clicked");
    experience = getExperience();
    preference = getpreference();
    suggestions = getsuggestions(); //calling these functions to get what is selected


    const newProfile = addProfile(
        nameInput.value,
        genderInput.value,
        ageInput.value,
        likeToCode.value,
        experience,
        preference,
    );


    createProfileElement(newProfile);


    nameInput.value = "";
    genderInput.value = "";
    ageInput.value = "";






});