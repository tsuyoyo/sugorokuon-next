// Generated by the protocol buffer compiler. DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: tsuyogoro/sugorokuon/StationService.proto

// Generated files should ignore deprecation warnings
@file:Suppress("DEPRECATION")
package com.tsuyogoro.sugorokuon;

@kotlin.jvm.JvmName("-initializegetStationResponse")
public inline fun getStationResponse(block: com.tsuyogoro.sugorokuon.GetStationResponseKt.Dsl.() -> kotlin.Unit): com.tsuyogoro.sugorokuon.GetStationResponse =
  com.tsuyogoro.sugorokuon.GetStationResponseKt.Dsl._create(com.tsuyogoro.sugorokuon.GetStationResponse.newBuilder()).apply { block() }._build()
/**
 * ```
 * GET /stations
 * ```
 *
 * Protobuf type `tsuyogoro.sugorokuon.GetStationResponse`
 */
public object GetStationResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: com.tsuyogoro.sugorokuon.GetStationResponse.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
      internal fun _create(builder: com.tsuyogoro.sugorokuon.GetStationResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
  @kotlin.PublishedApi
    internal fun _build(): com.tsuyogoro.sugorokuon.GetStationResponse = _builder.build()

    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    public class StationsProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * `repeated .tsuyogoro.sugorokuon.Station stations = 1 [json_name = "stations"];`
     */
     public val stations: com.google.protobuf.kotlin.DslList<com.tsuyogoro.sugorokuon.Station, StationsProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.stationsList
      )
    /**
     * `repeated .tsuyogoro.sugorokuon.Station stations = 1 [json_name = "stations"];`
     * @param value The stations to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addStations")
    public fun com.google.protobuf.kotlin.DslList<com.tsuyogoro.sugorokuon.Station, StationsProxy>.add(value: com.tsuyogoro.sugorokuon.Station) {
      _builder.addStations(value)
    }
    /**
     * `repeated .tsuyogoro.sugorokuon.Station stations = 1 [json_name = "stations"];`
     * @param value The stations to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignStations")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<com.tsuyogoro.sugorokuon.Station, StationsProxy>.plusAssign(value: com.tsuyogoro.sugorokuon.Station) {
      add(value)
    }
    /**
     * `repeated .tsuyogoro.sugorokuon.Station stations = 1 [json_name = "stations"];`
     * @param values The stations to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllStations")
    public fun com.google.protobuf.kotlin.DslList<com.tsuyogoro.sugorokuon.Station, StationsProxy>.addAll(values: kotlin.collections.Iterable<com.tsuyogoro.sugorokuon.Station>) {
      _builder.addAllStations(values)
    }
    /**
     * `repeated .tsuyogoro.sugorokuon.Station stations = 1 [json_name = "stations"];`
     * @param values The stations to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllStations")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<com.tsuyogoro.sugorokuon.Station, StationsProxy>.plusAssign(values: kotlin.collections.Iterable<com.tsuyogoro.sugorokuon.Station>) {
      addAll(values)
    }
    /**
     * `repeated .tsuyogoro.sugorokuon.Station stations = 1 [json_name = "stations"];`
     * @param index The index to set the value at.
     * @param value The stations to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setStations")
    public operator fun com.google.protobuf.kotlin.DslList<com.tsuyogoro.sugorokuon.Station, StationsProxy>.set(index: kotlin.Int, value: com.tsuyogoro.sugorokuon.Station) {
      _builder.setStations(index, value)
    }
    /**
     * `repeated .tsuyogoro.sugorokuon.Station stations = 1 [json_name = "stations"];`
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearStations")
    public fun com.google.protobuf.kotlin.DslList<com.tsuyogoro.sugorokuon.Station, StationsProxy>.clear() {
      _builder.clearStations()
    }

  }
}
@kotlin.jvm.JvmSynthetic
public inline fun com.tsuyogoro.sugorokuon.GetStationResponse.copy(block: `com.tsuyogoro.sugorokuon`.GetStationResponseKt.Dsl.() -> kotlin.Unit): com.tsuyogoro.sugorokuon.GetStationResponse =
  `com.tsuyogoro.sugorokuon`.GetStationResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()

