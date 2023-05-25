FROM openjdk:17-alpine
LABEL key="Discord Bot for Music"
COPY . /home/app
CMD ["java","-Dconfig=/home/app/bot_config.txt","-jar","/home/app/JMusicBot-0.3.9.jar"]
