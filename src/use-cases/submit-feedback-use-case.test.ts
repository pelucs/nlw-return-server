import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendEmailSpy = jest.fn();

const submitFedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendEmailSpy }
);

describe("Submit feedback", () => {
  it("should be able to submit a feedback", async () => {
    await expect(submitFedback.execute({ //IRÁ EXECUTAR A FUNÇÃO
      type: "BUG",
      comment: "exemple comment",
      screenshot: "data:image/png;base64,uasdhiaushduahuisd"
    })).resolves.not.toThrow(); // E AO EXECUTAR EU QUERO QUE ELA NÃO DESPARE NENHUM ERRO AO CHEGAR NO FINAL DA EXECUÇÃO
  
    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendEmailSpy).toHaveBeenCalled();
  })

  it("should not be able to submit feedback without type", async () => {
    await expect(submitFedback.execute({ //IRÁ EXECUTAR A FUNÇÃO
      type: "",
      comment: "exemple comment",
      screenshot: "data:image/png;base64,uasdhiaushduahuisd"
    })).rejects.toThrow(); // ESPERO QUE DESPARE UM ERRO
  })

  it("should not be able to submit feedback without comment", async () => {
    await expect(submitFedback.execute({ //IRÁ EXECUTAR A FUNÇÃO
      type: "BUG",
      comment: "",
      screenshot: "data:image/png;base64,uasdhiaushduahuisd"
    })).rejects.toThrow(); // ESPERO QUE DESPARE UM ERRO
  })

  it("should not be able to submit feedback with an invalid screenshot", async () => {
    await expect(submitFedback.execute({ //IRÁ EXECUTAR A FUNÇÃO
      type: "BUG",
      comment: "exemple comment",
      screenshot: "test.jpg"
    })).rejects.toThrow(); // ESPERO QUE DESPARE UM ERRO
  })
})