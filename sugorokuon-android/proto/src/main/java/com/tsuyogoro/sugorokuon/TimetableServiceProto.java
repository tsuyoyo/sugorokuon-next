// Generated by the protocol buffer compiler.  DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: tsuyogoro/sugorokuon/TimetableService.proto
// Protobuf Java Version: 4.29.1

package com.tsuyogoro.sugorokuon;

public final class TimetableServiceProto {
  private TimetableServiceProto() {}
  static {
    com.google.protobuf.RuntimeVersion.validateProtobufGencodeVersion(
      com.google.protobuf.RuntimeVersion.RuntimeDomain.PUBLIC,
      /* major= */ 4,
      /* minor= */ 29,
      /* patch= */ 1,
      /* suffix= */ "",
      TimetableServiceProto.class.getName());
  }
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_tsuyogoro_sugorokuon_GetAllTimetablesResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessage.FieldAccessorTable
      internal_static_tsuyogoro_sugorokuon_GetAllTimetablesResponse_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_tsuyogoro_sugorokuon_GetTimetablesByRegionResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessage.FieldAccessorTable
      internal_static_tsuyogoro_sugorokuon_GetTimetablesByRegionResponse_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_tsuyogoro_sugorokuon_GetTimetablesByAreaResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessage.FieldAccessorTable
      internal_static_tsuyogoro_sugorokuon_GetTimetablesByAreaResponse_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_tsuyogoro_sugorokuon_GetTimetablesByAreaAndDateResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessage.FieldAccessorTable
      internal_static_tsuyogoro_sugorokuon_GetTimetablesByAreaAndDateResponse_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n+tsuyogoro/sugorokuon/TimetableService." +
      "proto\022\024tsuyogoro.sugorokuon\032$tsuyogoro/s" +
      "ugorokuon/Timetable.proto\032!tsuyogoro/sug" +
      "orokuon/Region.proto\"\223\001\n\030GetAllTimetable" +
      "sResponse\0226\n\007regions\030\001 \003(\0132\034.tsuyogoro.s" +
      "ugorokuon.RegionR\007regions\022?\n\ntimetables\030" +
      "\002 \003(\0132\037.tsuyogoro.sugorokuon.TimetableR\n" +
      "timetables\"\226\001\n\035GetTimetablesByRegionResp" +
      "onse\0224\n\006region\030\001 \001(\0132\034.tsuyogoro.sugorok" +
      "uon.RegionR\006region\022?\n\ntimetables\030\002 \003(\0132\037" +
      ".tsuyogoro.sugorokuon.TimetableR\ntimetab" +
      "les\"^\n\033GetTimetablesByAreaResponse\022?\n\nti" +
      "metables\030\001 \003(\0132\037.tsuyogoro.sugorokuon.Ti" +
      "metableR\ntimetables\"e\n\"GetTimetablesByAr" +
      "eaAndDateResponse\022?\n\ntimetables\030\001 \003(\0132\037." +
      "tsuyogoro.sugorokuon.TimetableR\ntimetabl" +
      "esB\331\001\n\030com.tsuyogoro.sugorokuonB\025Timetab" +
      "leServiceProtoP\001Z5github.com/bufbuild/bu" +
      "f-tour/gen/tsuyogoro/sugorokuon\242\002\003TSX\252\002\024" +
      "Tsuyogoro.Sugorokuon\312\002\024Tsuyogoro\\Sugorok" +
      "uon\342\002 Tsuyogoro\\Sugorokuon\\GPBMetadata\352\002" +
      "\025Tsuyogoro::Sugorokuonb\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
          com.tsuyogoro.sugorokuon.TimetableProto.getDescriptor(),
          com.tsuyogoro.sugorokuon.RegionProto.getDescriptor(),
        });
    internal_static_tsuyogoro_sugorokuon_GetAllTimetablesResponse_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_tsuyogoro_sugorokuon_GetAllTimetablesResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessage.FieldAccessorTable(
        internal_static_tsuyogoro_sugorokuon_GetAllTimetablesResponse_descriptor,
        new java.lang.String[] { "Regions", "Timetables", });
    internal_static_tsuyogoro_sugorokuon_GetTimetablesByRegionResponse_descriptor =
      getDescriptor().getMessageTypes().get(1);
    internal_static_tsuyogoro_sugorokuon_GetTimetablesByRegionResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessage.FieldAccessorTable(
        internal_static_tsuyogoro_sugorokuon_GetTimetablesByRegionResponse_descriptor,
        new java.lang.String[] { "Region", "Timetables", });
    internal_static_tsuyogoro_sugorokuon_GetTimetablesByAreaResponse_descriptor =
      getDescriptor().getMessageTypes().get(2);
    internal_static_tsuyogoro_sugorokuon_GetTimetablesByAreaResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessage.FieldAccessorTable(
        internal_static_tsuyogoro_sugorokuon_GetTimetablesByAreaResponse_descriptor,
        new java.lang.String[] { "Timetables", });
    internal_static_tsuyogoro_sugorokuon_GetTimetablesByAreaAndDateResponse_descriptor =
      getDescriptor().getMessageTypes().get(3);
    internal_static_tsuyogoro_sugorokuon_GetTimetablesByAreaAndDateResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessage.FieldAccessorTable(
        internal_static_tsuyogoro_sugorokuon_GetTimetablesByAreaAndDateResponse_descriptor,
        new java.lang.String[] { "Timetables", });
    descriptor.resolveAllFeaturesImmutable();
    com.tsuyogoro.sugorokuon.TimetableProto.getDescriptor();
    com.tsuyogoro.sugorokuon.RegionProto.getDescriptor();
  }

  // @@protoc_insertion_point(outer_class_scope)
}
