node {
  stage('Checkout') {
    checkout scm
  }

  stage('Build') {
    sh 'npm install'
    sh 'npm build'
  }

 // No tests yet
 // stage('Test') {
 //   sh 'npm test'
 // }
}
