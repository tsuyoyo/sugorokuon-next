// Generated by the protocol buffer compiler.  DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: tsuyogoro/sugorokuon/StationDetail.proto
// Protobuf Java Version: 4.29.1

package com.tsuyogoro.sugorokuon;

/**
 * Protobuf type {@code tsuyogoro.sugorokuon.StationDetail}
 */
public final class StationDetail extends
    com.google.protobuf.GeneratedMessage implements
    // @@protoc_insertion_point(message_implements:tsuyogoro.sugorokuon.StationDetail)
    StationDetailOrBuilder {
private static final long serialVersionUID = 0L;
  static {
    com.google.protobuf.RuntimeVersion.validateProtobufGencodeVersion(
      com.google.protobuf.RuntimeVersion.RuntimeDomain.PUBLIC,
      /* major= */ 4,
      /* minor= */ 29,
      /* patch= */ 1,
      /* suffix= */ "",
      StationDetail.class.getName());
  }
  // Use StationDetail.newBuilder() to construct.
  private StationDetail(com.google.protobuf.GeneratedMessage.Builder<?> builder) {
    super(builder);
  }
  private StationDetail() {
    url_ = "";
  }

  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return com.tsuyogoro.sugorokuon.StationDetailProto.internal_static_tsuyogoro_sugorokuon_StationDetail_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessage.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return com.tsuyogoro.sugorokuon.StationDetailProto.internal_static_tsuyogoro_sugorokuon_StationDetail_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            com.tsuyogoro.sugorokuon.StationDetail.class, com.tsuyogoro.sugorokuon.StationDetail.Builder.class);
  }

  private int bitField0_;
  public static final int STATION_FIELD_NUMBER = 1;
  private com.tsuyogoro.sugorokuon.Station station_;
  /**
   * <code>.tsuyogoro.sugorokuon.Station station = 1 [json_name = "station"];</code>
   * @return Whether the station field is set.
   */
  @java.lang.Override
  public boolean hasStation() {
    return ((bitField0_ & 0x00000001) != 0);
  }
  /**
   * <code>.tsuyogoro.sugorokuon.Station station = 1 [json_name = "station"];</code>
   * @return The station.
   */
  @java.lang.Override
  public com.tsuyogoro.sugorokuon.Station getStation() {
    return station_ == null ? com.tsuyogoro.sugorokuon.Station.getDefaultInstance() : station_;
  }
  /**
   * <code>.tsuyogoro.sugorokuon.Station station = 1 [json_name = "station"];</code>
   */
  @java.lang.Override
  public com.tsuyogoro.sugorokuon.StationOrBuilder getStationOrBuilder() {
    return station_ == null ? com.tsuyogoro.sugorokuon.Station.getDefaultInstance() : station_;
  }

  public static final int URL_FIELD_NUMBER = 2;
  @SuppressWarnings("serial")
  private volatile java.lang.Object url_ = "";
  /**
   * <code>string url = 2 [json_name = "url"];</code>
   * @return The url.
   */
  @java.lang.Override
  public java.lang.String getUrl() {
    java.lang.Object ref = url_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      url_ = s;
      return s;
    }
  }
  /**
   * <code>string url = 2 [json_name = "url"];</code>
   * @return The bytes for url.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getUrlBytes() {
    java.lang.Object ref = url_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      url_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  private byte memoizedIsInitialized = -1;
  @java.lang.Override
  public final boolean isInitialized() {
    byte isInitialized = memoizedIsInitialized;
    if (isInitialized == 1) return true;
    if (isInitialized == 0) return false;

    memoizedIsInitialized = 1;
    return true;
  }

  @java.lang.Override
  public void writeTo(com.google.protobuf.CodedOutputStream output)
                      throws java.io.IOException {
    if (((bitField0_ & 0x00000001) != 0)) {
      output.writeMessage(1, getStation());
    }
    if (!com.google.protobuf.GeneratedMessage.isStringEmpty(url_)) {
      com.google.protobuf.GeneratedMessage.writeString(output, 2, url_);
    }
    getUnknownFields().writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (((bitField0_ & 0x00000001) != 0)) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(1, getStation());
    }
    if (!com.google.protobuf.GeneratedMessage.isStringEmpty(url_)) {
      size += com.google.protobuf.GeneratedMessage.computeStringSize(2, url_);
    }
    size += getUnknownFields().getSerializedSize();
    memoizedSize = size;
    return size;
  }

  @java.lang.Override
  public boolean equals(final java.lang.Object obj) {
    if (obj == this) {
     return true;
    }
    if (!(obj instanceof com.tsuyogoro.sugorokuon.StationDetail)) {
      return super.equals(obj);
    }
    com.tsuyogoro.sugorokuon.StationDetail other = (com.tsuyogoro.sugorokuon.StationDetail) obj;

    if (hasStation() != other.hasStation()) return false;
    if (hasStation()) {
      if (!getStation()
          .equals(other.getStation())) return false;
    }
    if (!getUrl()
        .equals(other.getUrl())) return false;
    if (!getUnknownFields().equals(other.getUnknownFields())) return false;
    return true;
  }

  @java.lang.Override
  public int hashCode() {
    if (memoizedHashCode != 0) {
      return memoizedHashCode;
    }
    int hash = 41;
    hash = (19 * hash) + getDescriptor().hashCode();
    if (hasStation()) {
      hash = (37 * hash) + STATION_FIELD_NUMBER;
      hash = (53 * hash) + getStation().hashCode();
    }
    hash = (37 * hash) + URL_FIELD_NUMBER;
    hash = (53 * hash) + getUrl().hashCode();
    hash = (29 * hash) + getUnknownFields().hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static com.tsuyogoro.sugorokuon.StationDetail parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.tsuyogoro.sugorokuon.StationDetail parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.tsuyogoro.sugorokuon.StationDetail parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.tsuyogoro.sugorokuon.StationDetail parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.tsuyogoro.sugorokuon.StationDetail parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.tsuyogoro.sugorokuon.StationDetail parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.tsuyogoro.sugorokuon.StationDetail parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseWithIOException(PARSER, input);
  }
  public static com.tsuyogoro.sugorokuon.StationDetail parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  public static com.tsuyogoro.sugorokuon.StationDetail parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseDelimitedWithIOException(PARSER, input);
  }

  public static com.tsuyogoro.sugorokuon.StationDetail parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.tsuyogoro.sugorokuon.StationDetail parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseWithIOException(PARSER, input);
  }
  public static com.tsuyogoro.sugorokuon.StationDetail parseFrom(
      com.google.protobuf.CodedInputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  @java.lang.Override
  public Builder newBuilderForType() { return newBuilder(); }
  public static Builder newBuilder() {
    return DEFAULT_INSTANCE.toBuilder();
  }
  public static Builder newBuilder(com.tsuyogoro.sugorokuon.StationDetail prototype) {
    return DEFAULT_INSTANCE.toBuilder().mergeFrom(prototype);
  }
  @java.lang.Override
  public Builder toBuilder() {
    return this == DEFAULT_INSTANCE
        ? new Builder() : new Builder().mergeFrom(this);
  }

  @java.lang.Override
  protected Builder newBuilderForType(
      com.google.protobuf.GeneratedMessage.BuilderParent parent) {
    Builder builder = new Builder(parent);
    return builder;
  }
  /**
   * Protobuf type {@code tsuyogoro.sugorokuon.StationDetail}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessage.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:tsuyogoro.sugorokuon.StationDetail)
      com.tsuyogoro.sugorokuon.StationDetailOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return com.tsuyogoro.sugorokuon.StationDetailProto.internal_static_tsuyogoro_sugorokuon_StationDetail_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessage.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return com.tsuyogoro.sugorokuon.StationDetailProto.internal_static_tsuyogoro_sugorokuon_StationDetail_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              com.tsuyogoro.sugorokuon.StationDetail.class, com.tsuyogoro.sugorokuon.StationDetail.Builder.class);
    }

    // Construct using com.tsuyogoro.sugorokuon.StationDetail.newBuilder()
    private Builder() {
      maybeForceBuilderInitialization();
    }

    private Builder(
        com.google.protobuf.GeneratedMessage.BuilderParent parent) {
      super(parent);
      maybeForceBuilderInitialization();
    }
    private void maybeForceBuilderInitialization() {
      if (com.google.protobuf.GeneratedMessage
              .alwaysUseFieldBuilders) {
        getStationFieldBuilder();
      }
    }
    @java.lang.Override
    public Builder clear() {
      super.clear();
      bitField0_ = 0;
      station_ = null;
      if (stationBuilder_ != null) {
        stationBuilder_.dispose();
        stationBuilder_ = null;
      }
      url_ = "";
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return com.tsuyogoro.sugorokuon.StationDetailProto.internal_static_tsuyogoro_sugorokuon_StationDetail_descriptor;
    }

    @java.lang.Override
    public com.tsuyogoro.sugorokuon.StationDetail getDefaultInstanceForType() {
      return com.tsuyogoro.sugorokuon.StationDetail.getDefaultInstance();
    }

    @java.lang.Override
    public com.tsuyogoro.sugorokuon.StationDetail build() {
      com.tsuyogoro.sugorokuon.StationDetail result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public com.tsuyogoro.sugorokuon.StationDetail buildPartial() {
      com.tsuyogoro.sugorokuon.StationDetail result = new com.tsuyogoro.sugorokuon.StationDetail(this);
      if (bitField0_ != 0) { buildPartial0(result); }
      onBuilt();
      return result;
    }

    private void buildPartial0(com.tsuyogoro.sugorokuon.StationDetail result) {
      int from_bitField0_ = bitField0_;
      int to_bitField0_ = 0;
      if (((from_bitField0_ & 0x00000001) != 0)) {
        result.station_ = stationBuilder_ == null
            ? station_
            : stationBuilder_.build();
        to_bitField0_ |= 0x00000001;
      }
      if (((from_bitField0_ & 0x00000002) != 0)) {
        result.url_ = url_;
      }
      result.bitField0_ |= to_bitField0_;
    }

    @java.lang.Override
    public Builder mergeFrom(com.google.protobuf.Message other) {
      if (other instanceof com.tsuyogoro.sugorokuon.StationDetail) {
        return mergeFrom((com.tsuyogoro.sugorokuon.StationDetail)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(com.tsuyogoro.sugorokuon.StationDetail other) {
      if (other == com.tsuyogoro.sugorokuon.StationDetail.getDefaultInstance()) return this;
      if (other.hasStation()) {
        mergeStation(other.getStation());
      }
      if (!other.getUrl().isEmpty()) {
        url_ = other.url_;
        bitField0_ |= 0x00000002;
        onChanged();
      }
      this.mergeUnknownFields(other.getUnknownFields());
      onChanged();
      return this;
    }

    @java.lang.Override
    public final boolean isInitialized() {
      return true;
    }

    @java.lang.Override
    public Builder mergeFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      if (extensionRegistry == null) {
        throw new java.lang.NullPointerException();
      }
      try {
        boolean done = false;
        while (!done) {
          int tag = input.readTag();
          switch (tag) {
            case 0:
              done = true;
              break;
            case 10: {
              input.readMessage(
                  getStationFieldBuilder().getBuilder(),
                  extensionRegistry);
              bitField0_ |= 0x00000001;
              break;
            } // case 10
            case 18: {
              url_ = input.readStringRequireUtf8();
              bitField0_ |= 0x00000002;
              break;
            } // case 18
            default: {
              if (!super.parseUnknownField(input, extensionRegistry, tag)) {
                done = true; // was an endgroup tag
              }
              break;
            } // default:
          } // switch (tag)
        } // while (!done)
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        throw e.unwrapIOException();
      } finally {
        onChanged();
      } // finally
      return this;
    }
    private int bitField0_;

    private com.tsuyogoro.sugorokuon.Station station_;
    private com.google.protobuf.SingleFieldBuilder<
        com.tsuyogoro.sugorokuon.Station, com.tsuyogoro.sugorokuon.Station.Builder, com.tsuyogoro.sugorokuon.StationOrBuilder> stationBuilder_;
    /**
     * <code>.tsuyogoro.sugorokuon.Station station = 1 [json_name = "station"];</code>
     * @return Whether the station field is set.
     */
    public boolean hasStation() {
      return ((bitField0_ & 0x00000001) != 0);
    }
    /**
     * <code>.tsuyogoro.sugorokuon.Station station = 1 [json_name = "station"];</code>
     * @return The station.
     */
    public com.tsuyogoro.sugorokuon.Station getStation() {
      if (stationBuilder_ == null) {
        return station_ == null ? com.tsuyogoro.sugorokuon.Station.getDefaultInstance() : station_;
      } else {
        return stationBuilder_.getMessage();
      }
    }
    /**
     * <code>.tsuyogoro.sugorokuon.Station station = 1 [json_name = "station"];</code>
     */
    public Builder setStation(com.tsuyogoro.sugorokuon.Station value) {
      if (stationBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        station_ = value;
      } else {
        stationBuilder_.setMessage(value);
      }
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <code>.tsuyogoro.sugorokuon.Station station = 1 [json_name = "station"];</code>
     */
    public Builder setStation(
        com.tsuyogoro.sugorokuon.Station.Builder builderForValue) {
      if (stationBuilder_ == null) {
        station_ = builderForValue.build();
      } else {
        stationBuilder_.setMessage(builderForValue.build());
      }
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <code>.tsuyogoro.sugorokuon.Station station = 1 [json_name = "station"];</code>
     */
    public Builder mergeStation(com.tsuyogoro.sugorokuon.Station value) {
      if (stationBuilder_ == null) {
        if (((bitField0_ & 0x00000001) != 0) &&
          station_ != null &&
          station_ != com.tsuyogoro.sugorokuon.Station.getDefaultInstance()) {
          getStationBuilder().mergeFrom(value);
        } else {
          station_ = value;
        }
      } else {
        stationBuilder_.mergeFrom(value);
      }
      if (station_ != null) {
        bitField0_ |= 0x00000001;
        onChanged();
      }
      return this;
    }
    /**
     * <code>.tsuyogoro.sugorokuon.Station station = 1 [json_name = "station"];</code>
     */
    public Builder clearStation() {
      bitField0_ = (bitField0_ & ~0x00000001);
      station_ = null;
      if (stationBuilder_ != null) {
        stationBuilder_.dispose();
        stationBuilder_ = null;
      }
      onChanged();
      return this;
    }
    /**
     * <code>.tsuyogoro.sugorokuon.Station station = 1 [json_name = "station"];</code>
     */
    public com.tsuyogoro.sugorokuon.Station.Builder getStationBuilder() {
      bitField0_ |= 0x00000001;
      onChanged();
      return getStationFieldBuilder().getBuilder();
    }
    /**
     * <code>.tsuyogoro.sugorokuon.Station station = 1 [json_name = "station"];</code>
     */
    public com.tsuyogoro.sugorokuon.StationOrBuilder getStationOrBuilder() {
      if (stationBuilder_ != null) {
        return stationBuilder_.getMessageOrBuilder();
      } else {
        return station_ == null ?
            com.tsuyogoro.sugorokuon.Station.getDefaultInstance() : station_;
      }
    }
    /**
     * <code>.tsuyogoro.sugorokuon.Station station = 1 [json_name = "station"];</code>
     */
    private com.google.protobuf.SingleFieldBuilder<
        com.tsuyogoro.sugorokuon.Station, com.tsuyogoro.sugorokuon.Station.Builder, com.tsuyogoro.sugorokuon.StationOrBuilder> 
        getStationFieldBuilder() {
      if (stationBuilder_ == null) {
        stationBuilder_ = new com.google.protobuf.SingleFieldBuilder<
            com.tsuyogoro.sugorokuon.Station, com.tsuyogoro.sugorokuon.Station.Builder, com.tsuyogoro.sugorokuon.StationOrBuilder>(
                getStation(),
                getParentForChildren(),
                isClean());
        station_ = null;
      }
      return stationBuilder_;
    }

    private java.lang.Object url_ = "";
    /**
     * <code>string url = 2 [json_name = "url"];</code>
     * @return The url.
     */
    public java.lang.String getUrl() {
      java.lang.Object ref = url_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        url_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string url = 2 [json_name = "url"];</code>
     * @return The bytes for url.
     */
    public com.google.protobuf.ByteString
        getUrlBytes() {
      java.lang.Object ref = url_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        url_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string url = 2 [json_name = "url"];</code>
     * @param value The url to set.
     * @return This builder for chaining.
     */
    public Builder setUrl(
        java.lang.String value) {
      if (value == null) { throw new NullPointerException(); }
      url_ = value;
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }
    /**
     * <code>string url = 2 [json_name = "url"];</code>
     * @return This builder for chaining.
     */
    public Builder clearUrl() {
      url_ = getDefaultInstance().getUrl();
      bitField0_ = (bitField0_ & ~0x00000002);
      onChanged();
      return this;
    }
    /**
     * <code>string url = 2 [json_name = "url"];</code>
     * @param value The bytes for url to set.
     * @return This builder for chaining.
     */
    public Builder setUrlBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) { throw new NullPointerException(); }
      checkByteStringIsUtf8(value);
      url_ = value;
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }

    // @@protoc_insertion_point(builder_scope:tsuyogoro.sugorokuon.StationDetail)
  }

  // @@protoc_insertion_point(class_scope:tsuyogoro.sugorokuon.StationDetail)
  private static final com.tsuyogoro.sugorokuon.StationDetail DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new com.tsuyogoro.sugorokuon.StationDetail();
  }

  public static com.tsuyogoro.sugorokuon.StationDetail getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<StationDetail>
      PARSER = new com.google.protobuf.AbstractParser<StationDetail>() {
    @java.lang.Override
    public StationDetail parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      Builder builder = newBuilder();
      try {
        builder.mergeFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        throw e.setUnfinishedMessage(builder.buildPartial());
      } catch (com.google.protobuf.UninitializedMessageException e) {
        throw e.asInvalidProtocolBufferException().setUnfinishedMessage(builder.buildPartial());
      } catch (java.io.IOException e) {
        throw new com.google.protobuf.InvalidProtocolBufferException(e)
            .setUnfinishedMessage(builder.buildPartial());
      }
      return builder.buildPartial();
    }
  };

  public static com.google.protobuf.Parser<StationDetail> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<StationDetail> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public com.tsuyogoro.sugorokuon.StationDetail getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

