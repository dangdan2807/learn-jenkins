pipeline {
    agent any 
    stages {
        stage('Push gitlab') {
            steps {
                echo 'Hello world'
            }
        }
        stage('build and push docker') {
            steps {
                // This step should not normally be used in your script. Consult the inline help for details.
                withDockerRegistry(credentialsId: 'dockerhub', url: 'https://index.docker.io/v1/') {
                    sh 'docker build -t dangdan2807/demo-build-jenkins'
                    sh 'docker push dangdan2807/demo-build-jenkins'
                }
            }
        }
    }
}