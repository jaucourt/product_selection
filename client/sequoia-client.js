import Client from "sequoia-client-sdk/lib/client";

const { SQ_DIRECTORY, SQ_IDENTITY_URL, SQ_REGISTRY_URL, SQ_TENANCY } = process.env;

const userClient = new Client(SQ_DIRECTORY, SQ_IDENTITY_URL, SQ_REGISTRY_URL);
userClient.setTenancy(SQ_TENANCY);

const registrationClient = new Client(SQ_DIRECTORY, SQ_IDENTITY_URL, SQ_REGISTRY_URL);
registrationClient.setTenancy(SQ_TENANCY);

export { registrationClient };
export default userClient;
