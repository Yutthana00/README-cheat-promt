// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

// module.exports = generateMarkdown;




// Function to generate markdown for README 

function markdownGenerator(data) {
    return `
  # $(data.Title)
  https://github.com/$(data.UserName)/$(data.Title)
  #Description
  $(data.Description)
  # Table of contents
  * [Installation] (#Installation)
  * [Usage] (#Usage)
  * [Contribution] (#Contribution)
  * [Tests] (#Test)
  * [License] (#License)
  * [Email] (#Email)
  
  #Installation
  The following is necessary dependencies must be installed to run this application smoothly.
  # Usage
  In order to use this application, $(data.Usage)
  #License
  This project is licensed by the $(data.License) license.
  ![Github license]
  #Contribution
  Contributors: $(data.Contrbution)
  #Tests
  The following is needed to run the test: $(data.Test)
  #Questions
  Further questions about this Repo, please contact $(data.Email) 

  
  `
}
