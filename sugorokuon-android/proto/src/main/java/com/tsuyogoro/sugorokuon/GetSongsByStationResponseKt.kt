// Generated by the protocol buffer compiler. DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: tsuyogoro/sugorokuon/SongService.proto

// Generated files should ignore deprecation warnings
@file:Suppress("DEPRECATION")
package com.tsuyogoro.sugorokuon;

@kotlin.jvm.JvmName("-initializegetSongsByStationResponse")
public inline fun getSongsByStationResponse(block: com.tsuyogoro.sugorokuon.GetSongsByStationResponseKt.Dsl.() -> kotlin.Unit): com.tsuyogoro.sugorokuon.GetSongsByStationResponse =
  com.tsuyogoro.sugorokuon.GetSongsByStationResponseKt.Dsl._create(com.tsuyogoro.sugorokuon.GetSongsByStationResponse.newBuilder()).apply { block() }._build()
/**
 * ```
 * GET /songs/{stationId}
 * ```
 *
 * Protobuf type `tsuyogoro.sugorokuon.GetSongsByStationResponse`
 */
public object GetSongsByStationResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: com.tsuyogoro.sugorokuon.GetSongsByStationResponse.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
      internal fun _create(builder: com.tsuyogoro.sugorokuon.GetSongsByStationResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
  @kotlin.PublishedApi
    internal fun _build(): com.tsuyogoro.sugorokuon.GetSongsByStationResponse = _builder.build()

    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    public class SongsProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * `repeated .tsuyogoro.sugorokuon.Song songs = 1 [json_name = "songs"];`
     */
     public val songs: com.google.protobuf.kotlin.DslList<com.tsuyogoro.sugorokuon.Song, SongsProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.songsList
      )
    /**
     * `repeated .tsuyogoro.sugorokuon.Song songs = 1 [json_name = "songs"];`
     * @param value The songs to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addSongs")
    public fun com.google.protobuf.kotlin.DslList<com.tsuyogoro.sugorokuon.Song, SongsProxy>.add(value: com.tsuyogoro.sugorokuon.Song) {
      _builder.addSongs(value)
    }
    /**
     * `repeated .tsuyogoro.sugorokuon.Song songs = 1 [json_name = "songs"];`
     * @param value The songs to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignSongs")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<com.tsuyogoro.sugorokuon.Song, SongsProxy>.plusAssign(value: com.tsuyogoro.sugorokuon.Song) {
      add(value)
    }
    /**
     * `repeated .tsuyogoro.sugorokuon.Song songs = 1 [json_name = "songs"];`
     * @param values The songs to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllSongs")
    public fun com.google.protobuf.kotlin.DslList<com.tsuyogoro.sugorokuon.Song, SongsProxy>.addAll(values: kotlin.collections.Iterable<com.tsuyogoro.sugorokuon.Song>) {
      _builder.addAllSongs(values)
    }
    /**
     * `repeated .tsuyogoro.sugorokuon.Song songs = 1 [json_name = "songs"];`
     * @param values The songs to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllSongs")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<com.tsuyogoro.sugorokuon.Song, SongsProxy>.plusAssign(values: kotlin.collections.Iterable<com.tsuyogoro.sugorokuon.Song>) {
      addAll(values)
    }
    /**
     * `repeated .tsuyogoro.sugorokuon.Song songs = 1 [json_name = "songs"];`
     * @param index The index to set the value at.
     * @param value The songs to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setSongs")
    public operator fun com.google.protobuf.kotlin.DslList<com.tsuyogoro.sugorokuon.Song, SongsProxy>.set(index: kotlin.Int, value: com.tsuyogoro.sugorokuon.Song) {
      _builder.setSongs(index, value)
    }
    /**
     * `repeated .tsuyogoro.sugorokuon.Song songs = 1 [json_name = "songs"];`
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearSongs")
    public fun com.google.protobuf.kotlin.DslList<com.tsuyogoro.sugorokuon.Song, SongsProxy>.clear() {
      _builder.clearSongs()
    }

  }
}
@kotlin.jvm.JvmSynthetic
public inline fun com.tsuyogoro.sugorokuon.GetSongsByStationResponse.copy(block: `com.tsuyogoro.sugorokuon`.GetSongsByStationResponseKt.Dsl.() -> kotlin.Unit): com.tsuyogoro.sugorokuon.GetSongsByStationResponse =
  `com.tsuyogoro.sugorokuon`.GetSongsByStationResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()

