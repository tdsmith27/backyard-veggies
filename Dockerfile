# base image
FROM node:9.6.1-onbuild

EXPOSE 3000

CMD ["npm", "start"]