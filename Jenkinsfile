pipeline {
  agent any
  environment {
    VERSION = '1.0'
  }
  stages {

    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('build') {
      steps {
        git url: 'https://github.com/DevOps-Inicial/front-demo-dockerize.git'
        sh '/usr/bin/ng build --prod'
      }
    }
  }

  post {
    success {
      archiveArtifacts(allowEmptyArchive: true, artifacts: 'dist/**')
    }
  }
}
