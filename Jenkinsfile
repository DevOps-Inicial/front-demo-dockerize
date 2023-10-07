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
        sh 'npm run build'
      }
    }
  }

  post {
    success {
      archiveArtifacts(allowEmptyArchive: true, artifacts: 'dist/**')
    }
  }
}
