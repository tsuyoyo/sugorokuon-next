// Generated by the protocol buffer compiler. DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: pet/v1/pet.proto

// Generated files should ignore deprecation warnings
@file:Suppress("DEPRECATION")
package com.pet.v1;

@kotlin.jvm.JvmName("-initializeputPetResponse")
public inline fun putPetResponse(block: com.pet.v1.PutPetResponseKt.Dsl.() -> kotlin.Unit): com.pet.v1.PutPetResponse =
  com.pet.v1.PutPetResponseKt.Dsl._create(com.pet.v1.PutPetResponse.newBuilder()).apply { block() }._build()
/**
 * Protobuf type `pet.v1.PutPetResponse`
 */
public object PutPetResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: com.pet.v1.PutPetResponse.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
      internal fun _create(builder: com.pet.v1.PutPetResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
  @kotlin.PublishedApi
    internal fun _build(): com.pet.v1.PutPetResponse = _builder.build()

    /**
     * `.pet.v1.Pet pet = 1 [json_name = "pet"];`
     */
    public var pet: com.pet.v1.Pet
      @JvmName("getPet")
      get() = _builder.pet
      @JvmName("setPet")
      set(value) {
        _builder.pet = value
      }
    /**
     * `.pet.v1.Pet pet = 1 [json_name = "pet"];`
     */
    public fun clearPet() {
      _builder.clearPet()
    }
    /**
     * `.pet.v1.Pet pet = 1 [json_name = "pet"];`
     * @return Whether the pet field is set.
     */
    public fun hasPet(): kotlin.Boolean {
      return _builder.hasPet()
    }

    public val PutPetResponseKt.Dsl.petOrNull: com.pet.v1.Pet?
      get() = _builder.petOrNull
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun com.pet.v1.PutPetResponse.copy(block: `com.pet.v1`.PutPetResponseKt.Dsl.() -> kotlin.Unit): com.pet.v1.PutPetResponse =
  `com.pet.v1`.PutPetResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()

public val com.pet.v1.PutPetResponseOrBuilder.petOrNull: com.pet.v1.Pet?
  get() = if (hasPet()) getPet() else null

