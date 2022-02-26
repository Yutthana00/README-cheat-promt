function fileGenerator(response) {
    var content = `# ${response.title}

  
  ${response.title}
  
  <br>

  ![Github](https://img.shields.io/github/license/${response.userName}/${response.title})

  <br>

  **Description**:
  <br>
  ${response.description}
  
  <br>

  **Github-Repositories**:
  <br>
  https://github.com/${response.userName}/${response.title}
  
  <br>
  
 
  **License**:
  <br>
  This project is licensed under the ${response.license} license.

  <br>

  ![Github](https://img.shields.io/github/license/${response.userName}/${response.title})
  
  <br>

  ## Table of contents
  * [Github Repository](#Github-Repositories)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributor](#Contribution)
  * [Tests](#Test)
  * [License](#License)
  * [Github User Name](#UserName)
  * [Email](#Email)
  
  <br>
  
  **Installation**:
  <br>
  ${response.installation} 
  
  <br>
  
  **Usage**:
  <br>
  ${response.usage}

  <br>
 
  **Contributor**:
  <br>
  This project is made by: ${response.contribution}
 
  <br>

  **Tests**:
  <br>
  For testing, please enter **${response.test}** into your terminal.
  
  <br>

  **Github User Name**:
  <br>
  ${response.userName}

  <br>
  
  **Email**:
  <br>
  If you have further questions about my project, please reach out to me at:  ${response.email} 
  
  <br>

  ###### [Back to Table of Contents](#Table-of-Contents)
  
  `
  return content; 
};

module.exports = fileGenerator;