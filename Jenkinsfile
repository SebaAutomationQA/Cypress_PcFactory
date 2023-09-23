pipeline {
    agent any

    tools {nodejs "NodeJS"}

    stages {

        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agent2_1"
                    }
                    steps {
                        git url: 'https://github.com/SebaAutomationQA/Cypress_PcFactory.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key a3fef947-c6f4-4b3c-8b67-b2ef93ca5ec8  --parallel'
                    
                    }
                }

                stage('Slave 2') {
                    agent {
                        label "Agent2_2"
                    }
                    steps {
                        git url: 'https://github.com/SebaAutomationQA/Cypress_PcFactory.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key a3fef947-c6f4-4b3c-8b67-b2ef93ca5ec8  --parallel'
                    
                    }
                }
                
   
                  
            }

             
        }

    }
            
}