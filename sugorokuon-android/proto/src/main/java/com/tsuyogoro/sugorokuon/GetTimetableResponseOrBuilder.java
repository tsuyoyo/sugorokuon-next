// Generated by the protocol buffer compiler.  DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: tsuyogoro/sugorokuon/GetTimetableResponse.proto
// Protobuf Java Version: 4.29.1

package com.tsuyogoro.sugorokuon;

public interface GetTimetableResponseOrBuilder extends
    // @@protoc_insertion_point(interface_extends:tsuyogoro.sugorokuon.GetTimetableResponse)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>repeated .tsuyogoro.sugorokuon.Timetable timetables = 1 [json_name = "timetables"];</code>
   */
  java.util.List<com.tsuyogoro.sugorokuon.Timetable> 
      getTimetablesList();
  /**
   * <code>repeated .tsuyogoro.sugorokuon.Timetable timetables = 1 [json_name = "timetables"];</code>
   */
  com.tsuyogoro.sugorokuon.Timetable getTimetables(int index);
  /**
   * <code>repeated .tsuyogoro.sugorokuon.Timetable timetables = 1 [json_name = "timetables"];</code>
   */
  int getTimetablesCount();
  /**
   * <code>repeated .tsuyogoro.sugorokuon.Timetable timetables = 1 [json_name = "timetables"];</code>
   */
  java.util.List<? extends com.tsuyogoro.sugorokuon.TimetableOrBuilder> 
      getTimetablesOrBuilderList();
  /**
   * <code>repeated .tsuyogoro.sugorokuon.Timetable timetables = 1 [json_name = "timetables"];</code>
   */
  com.tsuyogoro.sugorokuon.TimetableOrBuilder getTimetablesOrBuilder(
      int index);
}
