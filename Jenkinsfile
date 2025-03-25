pipeline {
    agent any
    
    stages {
        stage ('Pull the code from GitHub') {
            steps {
                git url: 'https://github.com/TakshilThummar/React_Portfolio_Website.git', branch: 'master'
                echo 'Pulled successfully...'
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
