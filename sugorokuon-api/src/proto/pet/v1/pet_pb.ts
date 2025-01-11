// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file pet/v1/pet.proto (package pet.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { DateTime } from "../../google/type/datetime_pb";
import { file_google_type_datetime } from "../../google/type/datetime_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file pet/v1/pet.proto.
 */
export const file_pet_v1_pet: GenFile = /*@__PURE__*/
  fileDesc("ChBwZXQvdjEvcGV0LnByb3RvEgZwZXQudjEicQoDUGV0EiEKCHBldF90eXBlGAEgASgOMg8ucGV0LnYxLlBldFR5cGUSDgoGcGV0X2lkGAIgASgJEgwKBG5hbWUYAyABKAkSKQoKY3JlYXRlZF9hdBgEIAEoCzIVLmdvb2dsZS50eXBlLkRhdGVUaW1lIh8KDUdldFBldFJlcXVlc3QSDgoGcGV0X2lkGAEgASgJIioKDkdldFBldFJlc3BvbnNlEhgKA3BldBgBIAEoCzILLnBldC52MS5QZXQiQAoNUHV0UGV0UmVxdWVzdBIhCghwZXRfdHlwZRgBIAEoDjIPLnBldC52MS5QZXRUeXBlEgwKBG5hbWUYAiABKAkiKgoOUHV0UGV0UmVzcG9uc2USGAoDcGV0GAEgASgLMgsucGV0LnYxLlBldCIiChBEZWxldGVQZXRSZXF1ZXN0Eg4KBnBldF9pZBgBIAEoCSITChFEZWxldGVQZXRSZXNwb25zZSpxCgdQZXRUeXBlEhgKFFBFVF9UWVBFX1VOU1BFQ0lGSUVEEAASEAoMUEVUX1RZUEVfQ0FUEAESEAoMUEVUX1RZUEVfRE9HEAISEgoOUEVUX1RZUEVfU05BS0UQAxIUChBQRVRfVFlQRV9IQU1TVEVSEAQyywEKD1BldFN0b3JlU2VydmljZRI5CgZHZXRQZXQSFS5wZXQudjEuR2V0UGV0UmVxdWVzdBoWLnBldC52MS5HZXRQZXRSZXNwb25zZSIAEjkKBlB1dFBldBIVLnBldC52MS5QdXRQZXRSZXF1ZXN0GhYucGV0LnYxLlB1dFBldFJlc3BvbnNlIgASQgoJRGVsZXRlUGV0EhgucGV0LnYxLkRlbGV0ZVBldFJlcXVlc3QaGS5wZXQudjEuRGVsZXRlUGV0UmVzcG9uc2UiAEJ+Cgpjb20ucGV0LnYxQghQZXRQcm90b1ABWi1naXRodWIuY29tL2J1ZmJ1aWxkL2J1Zi10b3VyL2dlbi9wZXQvdjE7cGV0djGiAgNQWFiqAgZQZXQuVjHKAgZQZXRcVjHiAhJQZXRcVjFcR1BCTWV0YWRhdGHqAgdQZXQ6OlYxYgZwcm90bzM", [file_google_type_datetime]);

/**
 * Pet represents a pet in the pet store.
 *
 * @generated from message pet.v1.Pet
 */
export type Pet = Message<"pet.v1.Pet"> & {
  /**
   * @generated from field: pet.v1.PetType pet_type = 1;
   */
  petType: PetType;

  /**
   * @generated from field: string pet_id = 2;
   */
  petId: string;

  /**
   * @generated from field: string name = 3;
   */
  name: string;

  /**
   * @generated from field: google.type.DateTime created_at = 4;
   */
  createdAt?: DateTime;
};

/**
 * Describes the message pet.v1.Pet.
 * Use `create(PetSchema)` to create a new message.
 */
export const PetSchema: GenMessage<Pet> = /*@__PURE__*/
  messageDesc(file_pet_v1_pet, 0);

/**
 * @generated from message pet.v1.GetPetRequest
 */
export type GetPetRequest = Message<"pet.v1.GetPetRequest"> & {
  /**
   * @generated from field: string pet_id = 1;
   */
  petId: string;
};

/**
 * Describes the message pet.v1.GetPetRequest.
 * Use `create(GetPetRequestSchema)` to create a new message.
 */
export const GetPetRequestSchema: GenMessage<GetPetRequest> = /*@__PURE__*/
  messageDesc(file_pet_v1_pet, 1);

/**
 * @generated from message pet.v1.GetPetResponse
 */
export type GetPetResponse = Message<"pet.v1.GetPetResponse"> & {
  /**
   * @generated from field: pet.v1.Pet pet = 1;
   */
  pet?: Pet;
};

/**
 * Describes the message pet.v1.GetPetResponse.
 * Use `create(GetPetResponseSchema)` to create a new message.
 */
export const GetPetResponseSchema: GenMessage<GetPetResponse> = /*@__PURE__*/
  messageDesc(file_pet_v1_pet, 2);

/**
 * @generated from message pet.v1.PutPetRequest
 */
export type PutPetRequest = Message<"pet.v1.PutPetRequest"> & {
  /**
   * @generated from field: pet.v1.PetType pet_type = 1;
   */
  petType: PetType;

  /**
   * @generated from field: string name = 2;
   */
  name: string;
};

/**
 * Describes the message pet.v1.PutPetRequest.
 * Use `create(PutPetRequestSchema)` to create a new message.
 */
export const PutPetRequestSchema: GenMessage<PutPetRequest> = /*@__PURE__*/
  messageDesc(file_pet_v1_pet, 3);

/**
 * @generated from message pet.v1.PutPetResponse
 */
export type PutPetResponse = Message<"pet.v1.PutPetResponse"> & {
  /**
   * @generated from field: pet.v1.Pet pet = 1;
   */
  pet?: Pet;
};

/**
 * Describes the message pet.v1.PutPetResponse.
 * Use `create(PutPetResponseSchema)` to create a new message.
 */
export const PutPetResponseSchema: GenMessage<PutPetResponse> = /*@__PURE__*/
  messageDesc(file_pet_v1_pet, 4);

/**
 * @generated from message pet.v1.DeletePetRequest
 */
export type DeletePetRequest = Message<"pet.v1.DeletePetRequest"> & {
  /**
   * @generated from field: string pet_id = 1;
   */
  petId: string;
};

/**
 * Describes the message pet.v1.DeletePetRequest.
 * Use `create(DeletePetRequestSchema)` to create a new message.
 */
export const DeletePetRequestSchema: GenMessage<DeletePetRequest> = /*@__PURE__*/
  messageDesc(file_pet_v1_pet, 5);

/**
 * @generated from message pet.v1.DeletePetResponse
 */
export type DeletePetResponse = Message<"pet.v1.DeletePetResponse"> & {
};

/**
 * Describes the message pet.v1.DeletePetResponse.
 * Use `create(DeletePetResponseSchema)` to create a new message.
 */
export const DeletePetResponseSchema: GenMessage<DeletePetResponse> = /*@__PURE__*/
  messageDesc(file_pet_v1_pet, 6);

/**
 * PetType represents the different types of pets in the pet store.
 *
 * @generated from enum pet.v1.PetType
 */
export enum PetType {
  /**
   * @generated from enum value: PET_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: PET_TYPE_CAT = 1;
   */
  CAT = 1,

  /**
   * @generated from enum value: PET_TYPE_DOG = 2;
   */
  DOG = 2,

  /**
   * @generated from enum value: PET_TYPE_SNAKE = 3;
   */
  SNAKE = 3,

  /**
   * @generated from enum value: PET_TYPE_HAMSTER = 4;
   */
  HAMSTER = 4,
}

/**
 * Describes the enum pet.v1.PetType.
 */
export const PetTypeSchema: GenEnum<PetType> = /*@__PURE__*/
  enumDesc(file_pet_v1_pet, 0);

/**
 * @generated from service pet.v1.PetStoreService
 */
export const PetStoreService: GenService<{
  /**
   * @generated from rpc pet.v1.PetStoreService.GetPet
   */
  getPet: {
    methodKind: "unary";
    input: typeof GetPetRequestSchema;
    output: typeof GetPetResponseSchema;
  },
  /**
   * @generated from rpc pet.v1.PetStoreService.PutPet
   */
  putPet: {
    methodKind: "unary";
    input: typeof PutPetRequestSchema;
    output: typeof PutPetResponseSchema;
  },
  /**
   * @generated from rpc pet.v1.PetStoreService.DeletePet
   */
  deletePet: {
    methodKind: "unary";
    input: typeof DeletePetRequestSchema;
    output: typeof DeletePetResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_pet_v1_pet, 0);

