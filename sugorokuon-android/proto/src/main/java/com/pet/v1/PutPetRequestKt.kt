// Generated by the protocol buffer compiler. DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: pet/v1/pet.proto

// Generated files should ignore deprecation warnings
@file:Suppress("DEPRECATION")
package com.pet.v1;

@kotlin.jvm.JvmName("-initializeputPetRequest")
public inline fun putPetRequest(block: com.pet.v1.PutPetRequestKt.Dsl.() -> kotlin.Unit): com.pet.v1.PutPetRequest =
  com.pet.v1.PutPetRequestKt.Dsl._create(com.pet.v1.PutPetRequest.newBuilder()).apply { block() }._build()
/**
 * Protobuf type `pet.v1.PutPetRequest`
 */
public object PutPetRequestKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: com.pet.v1.PutPetRequest.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
      internal fun _create(builder: com.pet.v1.PutPetRequest.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
  @kotlin.PublishedApi
    internal fun _build(): com.pet.v1.PutPetRequest = _builder.build()

    /**
     * `.pet.v1.PetType pet_type = 1 [json_name = "petType"];`
     */
    public var petType: com.pet.v1.PetType
      @JvmName("getPetType")
      get() = _builder.petType
      @JvmName("setPetType")
      set(value) {
        _builder.petType = value
      }
    public var petTypeValue: kotlin.Int
      @JvmName("getPetTypeValue")
      get() = _builder.petTypeValue
      @JvmName("setPetTypeValue")
      set(value) {
        _builder.petTypeValue = value
      }
    /**
     * `.pet.v1.PetType pet_type = 1 [json_name = "petType"];`
     */
    public fun clearPetType() {
      _builder.clearPetType()
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
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun com.pet.v1.PutPetRequest.copy(block: `com.pet.v1`.PutPetRequestKt.Dsl.() -> kotlin.Unit): com.pet.v1.PutPetRequest =
  `com.pet.v1`.PutPetRequestKt.Dsl._create(this.toBuilder()).apply { block() }._build()

