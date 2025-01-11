// Generated by the protocol buffer compiler. DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: tsuyogoro/sugorokuon/TimetableService.proto

// Generated files should ignore deprecation warnings
@file:Suppress("DEPRECATION")
package com.tsuyogoro.sugorokuon;

@kotlin.jvm.JvmName("-initializegetTimetablesByAreaAndDateResponse")
public inline fun getTimetablesByAreaAndDateResponse(block: com.tsuyogoro.sugorokuon.GetTimetablesByAreaAndDateResponseKt.Dsl.() -> kotlin.Unit): com.tsuyogoro.sugorokuon.GetTimetablesByAreaAndDateResponse =
  com.tsuyogoro.sugorokuon.GetTimetablesByAreaAndDateResponseKt.Dsl._create(com.tsuyogoro.sugorokuon.GetTimetablesByAreaAndDateResponse.newBuilder()).apply { block() }._build()
/**
 * ```
 * GET /timetables/area/{areaId}/date/{date}
 * ```
 *
 * Protobuf type `tsuyogoro.sugorokuon.GetTimetablesByAreaAndDateResponse`
 */
public object GetTimetablesByAreaAndDateResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: com.tsuyogoro.sugorokuon.GetTimetablesByAreaAndDateResponse.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
      internal fun _create(builder: com.tsuyogoro.sugorokuon.GetTimetablesByAreaAndDateResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
  @kotlin.PublishedApi
    internal fun _build(): com.tsuyogoro.sugorokuon.GetTimetablesByAreaAndDateResponse = _builder.build()

    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    public class TimetablesProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * `repeated .tsuyogoro.sugorokuon.Timetable timetables = 1 [json_name = "timetables"];`
     */
     public val timetables: com.google.protobuf.kotlin.DslList<com.tsuyogoro.sugorokuon.Timetable, TimetablesProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.timetablesList
      )
    /**
     * `repeated .tsuyogoro.sugorokuon.Timetable timetables = 1 [json_name = "timetables"];`
     * @param value The timetables to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addTimetables")
    public fun com.google.protobuf.kotlin.DslList<com.tsuyogoro.sugorokuon.Timetable, TimetablesProxy>.add(value: com.tsuyogoro.sugorokuon.Timetable) {
      _builder.addTimetables(value)
    }
    /**
     * `repeated .tsuyogoro.sugorokuon.Timetable timetables = 1 [json_name = "timetables"];`
     * @param value The timetables to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignTimetables")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<com.tsuyogoro.sugorokuon.Timetable, TimetablesProxy>.plusAssign(value: com.tsuyogoro.sugorokuon.Timetable) {
      add(value)
    }
    /**
     * `repeated .tsuyogoro.sugorokuon.Timetable timetables = 1 [json_name = "timetables"];`
     * @param values The timetables to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllTimetables")
    public fun com.google.protobuf.kotlin.DslList<com.tsuyogoro.sugorokuon.Timetable, TimetablesProxy>.addAll(values: kotlin.collections.Iterable<com.tsuyogoro.sugorokuon.Timetable>) {
      _builder.addAllTimetables(values)
    }
    /**
     * `repeated .tsuyogoro.sugorokuon.Timetable timetables = 1 [json_name = "timetables"];`
     * @param values The timetables to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllTimetables")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<com.tsuyogoro.sugorokuon.Timetable, TimetablesProxy>.plusAssign(values: kotlin.collections.Iterable<com.tsuyogoro.sugorokuon.Timetable>) {
      addAll(values)
    }
    /**
     * `repeated .tsuyogoro.sugorokuon.Timetable timetables = 1 [json_name = "timetables"];`
     * @param index The index to set the value at.
     * @param value The timetables to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setTimetables")
    public operator fun com.google.protobuf.kotlin.DslList<com.tsuyogoro.sugorokuon.Timetable, TimetablesProxy>.set(index: kotlin.Int, value: com.tsuyogoro.sugorokuon.Timetable) {
      _builder.setTimetables(index, value)
    }
    /**
     * `repeated .tsuyogoro.sugorokuon.Timetable timetables = 1 [json_name = "timetables"];`
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearTimetables")
    public fun com.google.protobuf.kotlin.DslList<com.tsuyogoro.sugorokuon.Timetable, TimetablesProxy>.clear() {
      _builder.clearTimetables()
    }

  }
}
@kotlin.jvm.JvmSynthetic
public inline fun com.tsuyogoro.sugorokuon.GetTimetablesByAreaAndDateResponse.copy(block: `com.tsuyogoro.sugorokuon`.GetTimetablesByAreaAndDateResponseKt.Dsl.() -> kotlin.Unit): com.tsuyogoro.sugorokuon.GetTimetablesByAreaAndDateResponse =
  `com.tsuyogoro.sugorokuon`.GetTimetablesByAreaAndDateResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()

