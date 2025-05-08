pipeline {
    agent any

    environment {
        IMAGE_NAME = 'apigateway-image'
        IMAGE_TAG = 'latest'
        CONTAINER_NAME = 'apigateway-container'
        PORT = '5000'
    }

    stages {

        stage('Build Docker Image') {
            steps {
                script {
                    echo 'Building the Docker image for API Gateway...'
                    sh """
                    docker build \
                        --build-arg PORT=${PORT} \
                        -t ${IMAGE_NAME}:${IMAGE_TAG} .
                    """
                }
            }
        }

        stage('Deploy Container') {
            steps {
                script {
                    echo 'Stopping and removing existing container if it exists...'
                    sh '''
                    if [ "$(docker ps -q -f name=${CONTAINER_NAME})" ]; then
                        docker stop ${CONTAINER_NAME}
                        docker rm ${CONTAINER_NAME}
                    fi
                    '''

                    echo 'Starting new container...'
                    sh '''
                    docker run -d --name ${CONTAINER_NAME} \
                        -p ${PORT}:${PORT} \
                        --env-file .env \
                        ${IMAGE_NAME}:${IMAGE_TAG}
                    '''
                }
            }
        }
    }

    post {
        always {
            script {
                echo 'Cleaning workspace...'
                cleanWs()
            }
        }
    }
}
