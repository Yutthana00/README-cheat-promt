function fileGenerator(response) {
    var content = `# ${response.title}

  # dog
  ${response.title}
  
  #### Description
  ${response.description}
  
  ## Table of contents
  * [Installation] (#installation)
  * [Usage] (#usage)
  * [Contribution] (#contribution)
  * [Tests] (#test)
  * [License] (#license)
  * [User-Name] (#userName)
  * [Email] (#email)
  
  ###### [Back to Table of Contents](#Table-of-Contents)
  
  ### Installation
  ${response.installation} 
  
  
  ### Usage
  ${response.usage}

  ###### [Back to Table of Contents](#table)
 
  ### Contribution
  ${response.contribution}
 
  ###### [Back to Table of Contents](#table)
   
  ### Tests
  ${response.test}
  
  ###### [Back to Table of Contents](#table)
  
  ### License
  ${response.license}

  ###### [Back to Table of Contents](#table)

  ### userName
  ${response.userName} 

  ###### [Back to Table of Contents](#table)

  ### email
  ${response.email}
  
  ###### [Back to Table of Contents](#table)
  `
  return content; 
};

module.exports = fileGenerator;