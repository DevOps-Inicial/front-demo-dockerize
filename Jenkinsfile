pipeline {
  agent any
  environment {
    VERSION = '1.0'
  }
  stages {
    stage('build') {
      steps {
        git url: 'https://github.com/DevOps-Inicial/front-demo-dockerize.git'
        sh '/usr/bin/ng build --prod'
      }
    }
    stage('build image') {
      steps {
        sh 'docker build -t front-demo-dockerize:${VERSION}.${BUILD_NUMBER} .'
      }
    }
  }
}
