pipeline {
    agent any
    
    stages {
        stage ('git') {
            steps {
                git url: 'https://github.com/TakshilThummar/React_Portfolio_Website.git', branch: 'master'
                echo 'pull success...'
            }
        }
        
        stage ('install node modules') {
            steps {
                sh 'sudo npm ci'
                echo 'done'
            }
        }
        
        stage ('build') {
            steps {
                sh 'sudo npm run build'
                echo 'done'
            }
        }
        
        stage ('create directory') {
            steps {
                sh 'sudo mkdir -p /var/www/html/jenkins'
                echo 'directory created'
            }
        }
        
        stage ('rm') {
            steps {
                sh 'sudo rm -rf /var/www/html/jenkins/*'
                echo 'done'
            }
        }
        
        stage ('mv') {
            steps {
                sh 'sudo mv /var/lib/jenkins/workspace/DevOps_Project/* /var/www/html/jenkins/'
                echo 'done'
            }
        }
        
    }
}
