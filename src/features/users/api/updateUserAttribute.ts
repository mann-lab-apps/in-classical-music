import { axios } from "@/libraries/axios";

type UpdateUserAttributeProps = {
  userId: string;
  body: any;
};

export const updateUserAttribute = ({
  userId,
  body,
}: UpdateUserAttributeProps) => {
  return axios.post(
    `/api/plugins/telemetry/USER/${userId}/attributes/SERVER_SCOPE`,
    body
  );
};
