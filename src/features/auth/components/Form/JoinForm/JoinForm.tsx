import { Form, InputField } from "@/components/Form";
import { FormWrapper } from "./JoinForm.style";
import { Button } from "@/components/Elements";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { join } from "@/features/auth/api";
import { FieldValues, useForm } from "react-hook-form";

export const JoinForm = () => {
  const [isShowingPasswordAsText, setIsShowingPasswordAsText] = useState(false);
  const [isShowingPasswordConfirmAsText, setIsShowingPasswordConfirmAsText] =
    useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const { setError } = useForm({ mode: "onBlur" });

  const handleSubmit = (values: FieldValues) => {
    const { name, email, password, passwordConfirm } = values;
    if (password !== passwordConfirm) {
      console.log("fail!");
      return setError(
        "passwordConfirm",
        {
          message: "비밀번호와 비밀번호 확인이 일치하지 않습니다",
        },
        { shouldFocus: true }
      );
    }

    (async () => {
      try {
        const response = await join({ name, email, password });
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    })();
    console.log("Submit!");
  };

  return (
    <Form onSubmit={handleSubmit}>
      {({ register, formState }) => (
        <FormWrapper>
          <InputField
            label="이름"
            registration={register("name")}
            error={formState.errors["name"]}
            type="text"
            placeholder="이름(실명)을 입력해주세요"
          />
          <InputField
            label="이메일"
            registration={register("email")}
            error={formState.errors["eamil"]}
            type="email"
            placeholder="example@inclassicalmusic.com"
          />
          <InputField
            label="비밀번호"
            registration={register("password")}
            error={formState.errors["password"]}
            type={isShowingPasswordAsText ? "text" : "password"}
            placeholder="영문+숫자+특수문자를 조합하여 9자리 이상 입력해주세요"
            button={
              <Button
                startIcon={
                  <FaEye
                    onClick={() => setIsShowingPasswordAsText((prev) => !prev)}
                  />
                }
                variant="surface"
              />
            }
          />
          <InputField
            label="비밀번호 확인"
            registration={register("passwordConfirm")}
            error={formState.errors["passwordConfirm"]}
            type={isShowingPasswordConfirmAsText ? "text" : "password"}
            placeholder="영문+숫자+특수문자를 조합하여 9자리 이상 입력해주세요"
            button={
              <Button
                startIcon={
                  <FaEye
                    onClick={() =>
                      setIsShowingPasswordConfirmAsText((prev) => !prev)
                    }
                  />
                }
                variant="surface"
              />
            }
          />
          <Button
            type="submit"
            isDisabled={isDisabled}
            variant={isDisabled ? "secondary" : "primaryContainer"}
            fontSize="medium"
            padding="10px"
          >
            회원가입
          </Button>
        </FormWrapper>
      )}
    </Form>
  );
};
