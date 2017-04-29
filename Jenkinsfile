node {
  stage('Checkout') {
    checkout scm
  }

  stage('Build') {
    sh 'npm install'
    sh 'npm build'

    if (env.BRANCH_NAME == 'master') {
      step([$class: 'ArtifactArchiver', artifacts: 'dist/*.*', fingerprint: true])
    }
  }

 // No tests yet
 // stage('Test') {
 //   sh 'npm test'
 // }
}
