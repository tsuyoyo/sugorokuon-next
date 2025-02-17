// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.36.2
// 	protoc        (unknown)
// source: tsuyogoro/sugorokuon/SongService.proto

package sugorokuon

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// GET /songs/{stationId}
type GetSongsByStationResponse struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Songs         []*Song                `protobuf:"bytes,1,rep,name=songs,proto3" json:"songs,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *GetSongsByStationResponse) Reset() {
	*x = GetSongsByStationResponse{}
	mi := &file_tsuyogoro_sugorokuon_SongService_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *GetSongsByStationResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetSongsByStationResponse) ProtoMessage() {}

func (x *GetSongsByStationResponse) ProtoReflect() protoreflect.Message {
	mi := &file_tsuyogoro_sugorokuon_SongService_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetSongsByStationResponse.ProtoReflect.Descriptor instead.
func (*GetSongsByStationResponse) Descriptor() ([]byte, []int) {
	return file_tsuyogoro_sugorokuon_SongService_proto_rawDescGZIP(), []int{0}
}

func (x *GetSongsByStationResponse) GetSongs() []*Song {
	if x != nil {
		return x.Songs
	}
	return nil
}

var File_tsuyogoro_sugorokuon_SongService_proto protoreflect.FileDescriptor

var file_tsuyogoro_sugorokuon_SongService_proto_rawDesc = []byte{
	0x0a, 0x26, 0x74, 0x73, 0x75, 0x79, 0x6f, 0x67, 0x6f, 0x72, 0x6f, 0x2f, 0x73, 0x75, 0x67, 0x6f,
	0x72, 0x6f, 0x6b, 0x75, 0x6f, 0x6e, 0x2f, 0x53, 0x6f, 0x6e, 0x67, 0x53, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x14, 0x74, 0x73, 0x75, 0x79, 0x6f, 0x67,
	0x6f, 0x72, 0x6f, 0x2e, 0x73, 0x75, 0x67, 0x6f, 0x72, 0x6f, 0x6b, 0x75, 0x6f, 0x6e, 0x1a, 0x1f,
	0x74, 0x73, 0x75, 0x79, 0x6f, 0x67, 0x6f, 0x72, 0x6f, 0x2f, 0x73, 0x75, 0x67, 0x6f, 0x72, 0x6f,
	0x6b, 0x75, 0x6f, 0x6e, 0x2f, 0x53, 0x6f, 0x6e, 0x67, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22,
	0x4d, 0x0a, 0x19, 0x47, 0x65, 0x74, 0x53, 0x6f, 0x6e, 0x67, 0x73, 0x42, 0x79, 0x53, 0x74, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x30, 0x0a, 0x05,
	0x73, 0x6f, 0x6e, 0x67, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x74, 0x73,
	0x75, 0x79, 0x6f, 0x67, 0x6f, 0x72, 0x6f, 0x2e, 0x73, 0x75, 0x67, 0x6f, 0x72, 0x6f, 0x6b, 0x75,
	0x6f, 0x6e, 0x2e, 0x53, 0x6f, 0x6e, 0x67, 0x52, 0x05, 0x73, 0x6f, 0x6e, 0x67, 0x73, 0x42, 0xd4,
	0x01, 0x0a, 0x18, 0x63, 0x6f, 0x6d, 0x2e, 0x74, 0x73, 0x75, 0x79, 0x6f, 0x67, 0x6f, 0x72, 0x6f,
	0x2e, 0x73, 0x75, 0x67, 0x6f, 0x72, 0x6f, 0x6b, 0x75, 0x6f, 0x6e, 0x42, 0x10, 0x53, 0x6f, 0x6e,
	0x67, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a,
	0x35, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x62, 0x75, 0x66, 0x62,
	0x75, 0x69, 0x6c, 0x64, 0x2f, 0x62, 0x75, 0x66, 0x2d, 0x74, 0x6f, 0x75, 0x72, 0x2f, 0x67, 0x65,
	0x6e, 0x2f, 0x74, 0x73, 0x75, 0x79, 0x6f, 0x67, 0x6f, 0x72, 0x6f, 0x2f, 0x73, 0x75, 0x67, 0x6f,
	0x72, 0x6f, 0x6b, 0x75, 0x6f, 0x6e, 0xa2, 0x02, 0x03, 0x54, 0x53, 0x58, 0xaa, 0x02, 0x14, 0x54,
	0x73, 0x75, 0x79, 0x6f, 0x67, 0x6f, 0x72, 0x6f, 0x2e, 0x53, 0x75, 0x67, 0x6f, 0x72, 0x6f, 0x6b,
	0x75, 0x6f, 0x6e, 0xca, 0x02, 0x14, 0x54, 0x73, 0x75, 0x79, 0x6f, 0x67, 0x6f, 0x72, 0x6f, 0x5c,
	0x53, 0x75, 0x67, 0x6f, 0x72, 0x6f, 0x6b, 0x75, 0x6f, 0x6e, 0xe2, 0x02, 0x20, 0x54, 0x73, 0x75,
	0x79, 0x6f, 0x67, 0x6f, 0x72, 0x6f, 0x5c, 0x53, 0x75, 0x67, 0x6f, 0x72, 0x6f, 0x6b, 0x75, 0x6f,
	0x6e, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x15,
	0x54, 0x73, 0x75, 0x79, 0x6f, 0x67, 0x6f, 0x72, 0x6f, 0x3a, 0x3a, 0x53, 0x75, 0x67, 0x6f, 0x72,
	0x6f, 0x6b, 0x75, 0x6f, 0x6e, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_tsuyogoro_sugorokuon_SongService_proto_rawDescOnce sync.Once
	file_tsuyogoro_sugorokuon_SongService_proto_rawDescData = file_tsuyogoro_sugorokuon_SongService_proto_rawDesc
)

func file_tsuyogoro_sugorokuon_SongService_proto_rawDescGZIP() []byte {
	file_tsuyogoro_sugorokuon_SongService_proto_rawDescOnce.Do(func() {
		file_tsuyogoro_sugorokuon_SongService_proto_rawDescData = protoimpl.X.CompressGZIP(file_tsuyogoro_sugorokuon_SongService_proto_rawDescData)
	})
	return file_tsuyogoro_sugorokuon_SongService_proto_rawDescData
}

var file_tsuyogoro_sugorokuon_SongService_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_tsuyogoro_sugorokuon_SongService_proto_goTypes = []any{
	(*GetSongsByStationResponse)(nil), // 0: tsuyogoro.sugorokuon.GetSongsByStationResponse
	(*Song)(nil),                      // 1: tsuyogoro.sugorokuon.Song
}
var file_tsuyogoro_sugorokuon_SongService_proto_depIdxs = []int32{
	1, // 0: tsuyogoro.sugorokuon.GetSongsByStationResponse.songs:type_name -> tsuyogoro.sugorokuon.Song
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_tsuyogoro_sugorokuon_SongService_proto_init() }
func file_tsuyogoro_sugorokuon_SongService_proto_init() {
	if File_tsuyogoro_sugorokuon_SongService_proto != nil {
		return
	}
	file_tsuyogoro_sugorokuon_Song_proto_init()
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_tsuyogoro_sugorokuon_SongService_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_tsuyogoro_sugorokuon_SongService_proto_goTypes,
		DependencyIndexes: file_tsuyogoro_sugorokuon_SongService_proto_depIdxs,
		MessageInfos:      file_tsuyogoro_sugorokuon_SongService_proto_msgTypes,
	}.Build()
	File_tsuyogoro_sugorokuon_SongService_proto = out.File
	file_tsuyogoro_sugorokuon_SongService_proto_rawDesc = nil
	file_tsuyogoro_sugorokuon_SongService_proto_goTypes = nil
	file_tsuyogoro_sugorokuon_SongService_proto_depIdxs = nil
}
