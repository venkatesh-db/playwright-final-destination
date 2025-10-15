

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

    stage('Parallel Build & Test') {
      parallel {
        stage('Chromium') {
          steps {
            bat 'npx playwright test --project=chromium'
          }
        }

        stage('Firefox') {
          steps {
            bat 'npx playwright test --project=firefox'
          }
        }
      }
    }

    stage('Publish Report') {
      steps {
        publishHTML(target: [
          reportDir: 'playwright-report',
          reportFiles: 'index.html',
          reportName: 'Playwright Test Report',
          alwaysLinkToLastBuild: true,
          keepAll: true,
          allowMissing: true
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
