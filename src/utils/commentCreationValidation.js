export const processServerErrors = (unprocessedServerErrors) => {
  const serverErrors = {};
  unprocessedServerErrors.map((error) => {
    switch (error.path) {
      case "content":
        serverErrors.content = error.msg;
        break;
    }
  });
  return serverErrors;
};
