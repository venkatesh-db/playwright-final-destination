
pipeline {
  agent any

  triggers {
    githubPush()
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    
    stage('Install') {
      steps {
        bat 'npm install'
        bat 'npx playwright install --with-deps'
      }
    }
    
    stage('Test') {
      steps {
        bat 'npm test'
      }
    }

    

    stage('Publish HTML Report') {
      steps {
        publishHTML(target: [
          allowMissing: true,
          keepAll: true,
          alwaysLinkToLastBuild: true,
          reportDir: 'playwright-report',
          reportFiles: 'index.html',
          reportName: 'Playwright Test Report'
        ])
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
    }
  }
}
