// Generated by the protocol buffer compiler. DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: tsuyogoro/sugorokuon/Artist.proto

// Generated files should ignore deprecation warnings
@file:Suppress("DEPRECATION")
package com.tsuyogoro.sugorokuon;

@kotlin.jvm.JvmName("-initializeartist")
public inline fun artist(block: com.tsuyogoro.sugorokuon.ArtistKt.Dsl.() -> kotlin.Unit): com.tsuyogoro.sugorokuon.Artist =
  com.tsuyogoro.sugorokuon.ArtistKt.Dsl._create(com.tsuyogoro.sugorokuon.Artist.newBuilder()).apply { block() }._build()
/**
 * Protobuf type `tsuyogoro.sugorokuon.Artist`
 */
public object ArtistKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: com.tsuyogoro.sugorokuon.Artist.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
      internal fun _create(builder: com.tsuyogoro.sugorokuon.Artist.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
  @kotlin.PublishedApi
    internal fun _build(): com.tsuyogoro.sugorokuon.Artist = _builder.build()

    /**
     * ```
     * Memo: idsから作る
     * ```
     *
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
     * ```
     * Memo: idsから作る
     * ```
     *
     * `string id = 1 [json_name = "id"];`
     */
    public fun clearId() {
      _builder.clearId()
    }

    /**
     * `string name = 2 [json_name = "name"];`
     */
    public var name: kotlin.String
      @JvmName("getName")
      get() = _builder.name
      @JvmName("setName")
      set(value) {
        _builder.name = value
      }
    /**
     * `string name = 2 [json_name = "name"];`
     */
    public fun clearName() {
      _builder.clearName()
    }

    /**
     * `string nameEn = 3 [json_name = "nameEn"];`
     */
    public var nameEn: kotlin.String
      @JvmName("getNameEn")
      get() = _builder.nameEn
      @JvmName("setNameEn")
      set(value) {
        _builder.nameEn = value
      }
    /**
     * `string nameEn = 3 [json_name = "nameEn"];`
     */
    public fun clearNameEn() {
      _builder.clearNameEn()
    }

    /**
     * `string nameKana = 4 [json_name = "nameKana"];`
     */
    public var nameKana: kotlin.String
      @JvmName("getNameKana")
      get() = _builder.nameKana
      @JvmName("setNameKana")
      set(value) {
        _builder.nameKana = value
      }
    /**
     * `string nameKana = 4 [json_name = "nameKana"];`
     */
    public fun clearNameKana() {
      _builder.clearNameKana()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun com.tsuyogoro.sugorokuon.Artist.copy(block: `com.tsuyogoro.sugorokuon`.ArtistKt.Dsl.() -> kotlin.Unit): com.tsuyogoro.sugorokuon.Artist =
  `com.tsuyogoro.sugorokuon`.ArtistKt.Dsl._create(this.toBuilder()).apply { block() }._build()

