pipeline {
    agent any
    
    stages {
        stage ('Pull the code from GitHub') {
            steps {
                git url: 'https://github.com/TakshilThummar/React_Portfolio_Website.git', branch: 'master'
                echo 'Pulled successfully...'
            }
        }
        
        stage ('Install node modules') {
            steps {
                sh 'sudo npm ci'
                echo 'Node modules installed successfully...'
            }
        }
        
        stage ('Build') {
            steps {
                sh 'sudo npm run build'
                echo 'Build successfully...'
            }
        }
        
        stage ('Docker container stop') {
            steps {
                script {
                    def containerExists = sh(script: "docker ps -q --filter 'name=react-jenkins'", returnStdout: true).trim()
                    if (containerExists) {
                        echo 'Docker container exists, stopping...'
                        sh 'docker stop react-jenkins'
                    } else {
                        echo 'Docker container does not exist, skipping stop stage'
                    }
                }
            }
        }
        
        stage ('Docker container delete') {
            steps {
                script {
                    def containerExists = sh(script: "docker ps -a -q --filter 'name=react-jenkins'", returnStdout: true).trim()
                    if (containerExists) {
                        echo 'Docker container exists, deleting...'
                        sh 'docker rm react-jenkins'
                    } else {
                        echo 'Docker container does not exist, skipping delete stage'
                    }
                }
            }
        }
        
        stage ('Docker image delete') {
            steps {
                script {
                    def imageExists = sh(script: "docker images -q react-jenkins", returnStdout: true).trim()
                    if (imageExists) {
                        echo 'Docker image exists, deleting...'
                        sh 'docker image rm react-jenkins'
                    } else {
                        echo 'Docker image does not exist, skipping delete stage'
                    }
                }
            }
        }
        
        stage ('Docker image build') {
            steps {
                sh 'docker build -t react-jenkins .'
                sh 'docker images'
                echo 'Docker image build successfully...'
            }
        }
        
        stage ('Docker container create') {
            steps {
                sh 'docker run -d --name react-jenkins react-jenkins'
                sh 'docker ps'
                echo 'Docker container created successfully...'
            }
        }
    }

    post {
        success {
            echo 'Pipeline succeeded!'
            emailext (
                subject: "Jenkins Pipeline Success: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: "Good news! The pipeline has succeeded.\n\nJob: ${env.JOB_NAME}\nBuild Number: ${env.BUILD_NUMBER}\nCheck the console log at ${env.BUILD_URL}",
                to: "takshilthummar22@gmail.com"
            )
        }

        failure {
            echo 'Pipeline failed!'
            emailext (
                subject: "Jenkins Pipeline Failed: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: "Unfortunately, the pipeline has failed.\n\nJob: ${env.JOB_NAME}\nBuild Number: ${env.BUILD_NUMBER}\nCheck the console log at ${env.BUILD_URL}",
                to: "takshilthummar22@gmail.com"
            )
        }
    }
}
