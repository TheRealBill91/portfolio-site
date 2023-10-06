import { processServerErrors as processCommentCreationServerErrors } from "../../utils/commentCreationValidation";

export async function blogPostAction({ request, params }) {
  let formData = await request.formData();
  const intent = formData.get("intent");
  const authStatus = formData.get("authStatus");

  if (authStatus === "false") {
    return { failMessage: "need to sign in or login" };
  }

  if (intent === "likecomment") {
    const commentId = formData.get("commentId");
    return await likeComment(commentId);
  }

  if (intent === "postcomment") {
    const content = formData.get("content");
    return await createComment(params, content);
  }
}

async function likeComment(commentId) {
  const likeFetchDetails = {
    url: `http://localhost:3000/client/${commentId}/comment_upvote`,
    options: {
      mode: "cors",
      credentials: "include",
      method: "POST",
      headers: { "Content-Type": "application/json" },
    },
  };

  const response = await fetch(likeFetchDetails.url, likeFetchDetails.options);

  if (!response.ok) {
    // console.log(await response.json());
  }

  return { ok: true };
}

async function createComment(params, content) {
  const commentCreationFetchDetails = {
    url: `http://localhost:3000/client/${params.postId}/comment_creation`,
    options: {
      mode: "cors",
      credentials: "include",
      method: "POST",
      body: JSON.stringify({
        content,
      }),
      headers: { "Content-Type": "application/json" },
    },
  };

  const response = await fetch(
    commentCreationFetchDetails.url,
    commentCreationFetchDetails.options
  );

  if (!response.ok) {
    const formResponse = await response.json();
    const unprocessedServerErrors = formResponse.errors;

    const serverErrors = processCommentCreationServerErrors(
      unprocessedServerErrors
    );
    return serverErrors;
  }
  return { ok: true };
}
