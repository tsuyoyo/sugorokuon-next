// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file tsuyogoro/sugorokuon/GetTimetableResponse.proto (package tsuyogoro.sugorokuon, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Timetable } from "./Timetable_pb";
import { file_tsuyogoro_sugorokuon_Timetable } from "./Timetable_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file tsuyogoro/sugorokuon/GetTimetableResponse.proto.
 */
export const file_tsuyogoro_sugorokuon_GetTimetableResponse: GenFile = /*@__PURE__*/
  fileDesc("Ci90c3V5b2dvcm8vc3Vnb3Jva3Vvbi9HZXRUaW1ldGFibGVSZXNwb25zZS5wcm90bxIUdHN1eW9nb3JvLnN1Z29yb2t1b24iSwoUR2V0VGltZXRhYmxlUmVzcG9uc2USMwoKdGltZXRhYmxlcxgBIAMoCzIfLnRzdXlvZ29yby5zdWdvcm9rdW9uLlRpbWV0YWJsZULdAQoYY29tLnRzdXlvZ29yby5zdWdvcm9rdW9uQhlHZXRUaW1ldGFibGVSZXNwb25zZVByb3RvUAFaNWdpdGh1Yi5jb20vYnVmYnVpbGQvYnVmLXRvdXIvZ2VuL3RzdXlvZ29yby9zdWdvcm9rdW9uogIDVFNYqgIUVHN1eW9nb3JvLlN1Z29yb2t1b27KAhRUc3V5b2dvcm9cU3Vnb3Jva3VvbuICIFRzdXlvZ29yb1xTdWdvcm9rdW9uXEdQQk1ldGFkYXRh6gIVVHN1eW9nb3JvOjpTdWdvcm9rdW9uYgZwcm90bzM", [file_tsuyogoro_sugorokuon_Timetable]);

/**
 * @generated from message tsuyogoro.sugorokuon.GetTimetableResponse
 */
export type GetTimetableResponse = Message<"tsuyogoro.sugorokuon.GetTimetableResponse"> & {
  /**
   * @generated from field: repeated tsuyogoro.sugorokuon.Timetable timetables = 1;
   */
  timetables: Timetable[];
};

/**
 * Describes the message tsuyogoro.sugorokuon.GetTimetableResponse.
 * Use `create(GetTimetableResponseSchema)` to create a new message.
 */
export const GetTimetableResponseSchema: GenMessage<GetTimetableResponse> = /*@__PURE__*/
  messageDesc(file_tsuyogoro_sugorokuon_GetTimetableResponse, 0);

