pipeline:
  agent: any
  tools:
    nodejs: 'NodeJS'
  stages:
    - stage: Checkout
      steps:
        - git branch: 'master'
          url: 'https://github.com/felipe-greggio/PUCPR-FORCA.git'
    - stage: Build
      steps:
        - sh 'node -v'
    - stage: Test
      steps:
        - echo "Rodando arquivo 'hello.js'"
        - sh 'node hello.js'
        - echo "Rodando arquivo 'test.js'"
        - sh 'node test.js'
    - stage: Deploy
      steps:
        - echo 'Finished deployment. Hello, world!'
