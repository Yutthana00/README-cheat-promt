function fileGenerator(response) {
    var content = `# ${response.title}

  
  ${response.title}
  
  #### Description
  ${response.description}
  
  ## Table of contents
  * [Installation] (#Installation)
  * [Usage] (#Usage)
  * [Contribution] (#Contribution)
  * [Tests] (#Test)
  * [License] (#License)
  * [User-Name] (#UserName)
  * [Email] (#Email)
  
  ###### [Back to Table of Contents](#Table-of-Contents)
  
  ### Installation
  ${response.installation} 
  
  
  ### Usage
  ${response.usage}

 
  ### Contribution
  ${response.contribution}
 
  
  ### Tests
  ${response.test}
  

  
  ### userName
  ${response.userName} 
  
  
  
  ### email
  ${response.email}
  
 
  ### License
  ${response.license}
  
  ###### [Back to Table of Contents](#table)
  
  `
  return content; 
};

module.exports = fileGenerator;