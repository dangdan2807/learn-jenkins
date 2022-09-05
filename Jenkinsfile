pipeline {
    agent any 
    stages {
        stage('clone github') {
            steps {
                git branch: 'main', url: 'https://github.com/dangdan2807/learn-jenkins'
            }
        }
        stage('build docker') {
            steps {
                // This step should not normally be used in your script. Consult the inline help for details.
                withDockerRegistry(credentialsId: 'dockerhub', url: 'https://index.docker.io/v1/') {
                    bat 'docker build -t dangdan2807/learn-jenkins:v1.0 .'
                }
            }
        }
        stage('push docker') {
            steps {
                // This step should not normally be used in your script. Consult the inline help for details.
                withDockerRegistry(credentialsId: 'dockerhub', url: 'https://index.docker.io/v1/') {
                    bat 'docker push dangdan2807/learn-jenkins:v1.0'
                }
            }
        }
    }
}