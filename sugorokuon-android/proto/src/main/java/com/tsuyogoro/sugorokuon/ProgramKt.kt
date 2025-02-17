// Generated by the protocol buffer compiler. DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: tsuyogoro/sugorokuon/Program.proto

// Generated files should ignore deprecation warnings
@file:Suppress("DEPRECATION")
package com.tsuyogoro.sugorokuon;

@kotlin.jvm.JvmName("-initializeprogram")
public inline fun program(block: com.tsuyogoro.sugorokuon.ProgramKt.Dsl.() -> kotlin.Unit): com.tsuyogoro.sugorokuon.Program =
  com.tsuyogoro.sugorokuon.ProgramKt.Dsl._create(com.tsuyogoro.sugorokuon.Program.newBuilder()).apply { block() }._build()
/**
 * Protobuf type `tsuyogoro.sugorokuon.Program`
 */
public object ProgramKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: com.tsuyogoro.sugorokuon.Program.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
      internal fun _create(builder: com.tsuyogoro.sugorokuon.Program.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
  @kotlin.PublishedApi
    internal fun _build(): com.tsuyogoro.sugorokuon.Program = _builder.build()

    /**
     * `string id = 1 [json_name = "id"];`
     */
    public var id: kotlin.String
      @JvmName("getId")
      get() = _builder.id
      @JvmName("setId")
      set(value) {
        _builder.id = value
      }
    /**
     * `string id = 1 [json_name = "id"];`
     */
    public fun clearId() {
      _builder.clearId()
    }

    /**
     * `string title = 2 [json_name = "title"];`
     */
    public var title: kotlin.String
      @JvmName("getTitle")
      get() = _builder.title
      @JvmName("setTitle")
      set(value) {
        _builder.title = value
      }
    /**
     * `string title = 2 [json_name = "title"];`
     */
    public fun clearTitle() {
      _builder.clearTitle()
    }

    /**
     * `string url = 3 [json_name = "url"];`
     */
    public var url: kotlin.String
      @JvmName("getUrl")
      get() = _builder.url
      @JvmName("setUrl")
      set(value) {
        _builder.url = value
      }
    /**
     * `string url = 3 [json_name = "url"];`
     */
    public fun clearUrl() {
      _builder.clearUrl()
    }

    /**
     * `.google.type.DateTime startTime = 4 [json_name = "startTime"];`
     */
    public var startTime: com.google.type.DateTime
      @JvmName("getStartTime")
      get() = _builder.startTime
      @JvmName("setStartTime")
      set(value) {
        _builder.startTime = value
      }
    /**
     * `.google.type.DateTime startTime = 4 [json_name = "startTime"];`
     */
    public fun clearStartTime() {
      _builder.clearStartTime()
    }
    /**
     * `.google.type.DateTime startTime = 4 [json_name = "startTime"];`
     * @return Whether the startTime field is set.
     */
    public fun hasStartTime(): kotlin.Boolean {
      return _builder.hasStartTime()
    }

    public val ProgramKt.Dsl.startTimeOrNull: com.google.type.DateTime?
      get() = _builder.startTimeOrNull

    /**
     * `.google.type.DateTime endTime = 5 [json_name = "endTime"];`
     */
    public var endTime: com.google.type.DateTime
      @JvmName("getEndTime")
      get() = _builder.endTime
      @JvmName("setEndTime")
      set(value) {
        _builder.endTime = value
      }
    /**
     * `.google.type.DateTime endTime = 5 [json_name = "endTime"];`
     */
    public fun clearEndTime() {
      _builder.clearEndTime()
    }
    /**
     * `.google.type.DateTime endTime = 5 [json_name = "endTime"];`
     * @return Whether the endTime field is set.
     */
    public fun hasEndTime(): kotlin.Boolean {
      return _builder.hasEndTime()
    }

    public val ProgramKt.Dsl.endTimeOrNull: com.google.type.DateTime?
      get() = _builder.endTimeOrNull

    /**
     * `string personalities = 6 [json_name = "personalities"];`
     */
    public var personalities: kotlin.String
      @JvmName("getPersonalities")
      get() = _builder.personalities
      @JvmName("setPersonalities")
      set(value) {
        _builder.personalities = value
      }
    /**
     * `string personalities = 6 [json_name = "personalities"];`
     */
    public fun clearPersonalities() {
      _builder.clearPersonalities()
    }

    /**
     * `string image = 7 [json_name = "image"];`
     */
    public var image: kotlin.String
      @JvmName("getImage")
      get() = _builder.image
      @JvmName("setImage")
      set(value) {
        _builder.image = value
      }
    /**
     * `string image = 7 [json_name = "image"];`
     */
    public fun clearImage() {
      _builder.clearImage()
    }

    /**
     * `string desc = 8 [json_name = "desc"];`
     */
    public var desc: kotlin.String
      @JvmName("getDesc")
      get() = _builder.desc
      @JvmName("setDesc")
      set(value) {
        _builder.desc = value
      }
    /**
     * `string desc = 8 [json_name = "desc"];`
     */
    public fun clearDesc() {
      _builder.clearDesc()
    }

    /**
     * `string info = 9 [json_name = "info"];`
     */
    public var info: kotlin.String
      @JvmName("getInfo")
      get() = _builder.info
      @JvmName("setInfo")
      set(value) {
        _builder.info = value
      }
    /**
     * `string info = 9 [json_name = "info"];`
     */
    public fun clearInfo() {
      _builder.clearInfo()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun com.tsuyogoro.sugorokuon.Program.copy(block: `com.tsuyogoro.sugorokuon`.ProgramKt.Dsl.() -> kotlin.Unit): com.tsuyogoro.sugorokuon.Program =
  `com.tsuyogoro.sugorokuon`.ProgramKt.Dsl._create(this.toBuilder()).apply { block() }._build()

public val com.tsuyogoro.sugorokuon.ProgramOrBuilder.startTimeOrNull: com.google.type.DateTime?
  get() = if (hasStartTime()) getStartTime() else null

public val com.tsuyogoro.sugorokuon.ProgramOrBuilder.endTimeOrNull: com.google.type.DateTime?
  get() = if (hasEndTime()) getEndTime() else null

